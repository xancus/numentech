from flask import Blueprint, jsonify, request
from database.controllers import user_controller
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token, set_access_cookies, unset_jwt_cookies, jwt_required

auth = Blueprint('auth', __name__)

@auth.route('/login', methods = ['POST'])
def login():
    # Get email and password and check if user exists on database.
    # Args: email (str), password (str)
    # Returns: 
        # 404 if not found
        # 401 if incorrect password
        # 500 Error
        # 200 if login successfull + test access token

    try:
        email = request.json.get('email')
        password = request.json.get('password')
        user = user_controller.get_user(email)
        if not user: return jsonify({'error': 'User not found'}), 404

        correct_password = check_password_hash(user.password, password)
        if not correct_password: return jsonify({'error': 'Incorrect password'}), 401

        response = jsonify({
            'login': True
        })

        access_token = create_access_token(identity=email)
        set_access_cookies(response, access_token)

        return response, 200
    except Exception as e:
        
        return jsonify({'error': 'Internal server error'}), 500

@auth.route('/register', methods = ['POST'])
def register():
    # Register new user in database
    # Args: email (str), password (str)
    # Returns: 
        # 400 Email already in use
        # 500 Error
        # 200 Successfull

    email = request.json.get('email')
    password = request.json.get('password')
    hashed_password = generate_password_hash(password)

    try:
        existing_user = user_controller.get_user(email)
        if(existing_user): return jsonify({'error': 'Email already in use'}), 400

        new_user = user_controller.register_user(email, hashed_password)
        
        response = jsonify({
            'email': new_user.email,
        })

        access_token = create_access_token(identity=email)
        set_access_cookies(response, access_token)

        return response, 200
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500


@auth.route("/logout", methods=["POST", "GET"])
@jwt_required()
def logout():
    # Remove token from user cookies
    
    resp = jsonify({'logout': True})
    unset_jwt_cookies(resp)
    return resp, 200