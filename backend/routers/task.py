from flask import Blueprint, jsonify, request
from database.controllers import task_controller, user_controller
from flask_jwt_extended import jwt_required, get_jwt_identity

task = Blueprint('task', __name__)

@task.route('/get_tasks_data', methods=['GET'])
def get_tasks_data():
    # Get all tasks
    # Returns:
        # 200 if task --> [tasks]
        # 500 Error
    try:
        tasks_list = task_controller.get_all_tasks()

        tasks = [{
            'id': task.id,
            'title': task.title,
            'description': task.description,
            'user': user_controller.get_user_by_id(task.user_id).email,
            'created_at': task.created_at
        } for task in tasks_list]

        return jsonify({'tasks': tasks}), 200
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

@task.route('/get_task_data/<id>', methods=['GET'])
def get_task_data(id):
    # Get task by id
    # Args: id (int)
    # Returns: 
        # 404 if not found
        # 200 if task --> task
        # 500 Error
    
    try:
        task = task_controller.get_task(id)
        if not task: return jsonify({'error': 'Task not found'}), 404
        
        return jsonify({'task': task})
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500


@task.route('/create_task', methods=['POST'])
@jwt_required()
def create_task():
    # Creates new task only if user is logged in 
    # Args: title (str), description(str), cookies (user identity)
    # Returns: 
        # 200 created
        # 404 User not found
        # 500 Error
    # return jsonify({'created': True}), 200

    try:
        title = request.json.get('task_title')
        description = request.json.get('task_description')
        user_email = get_jwt_identity()

        user = user_controller.get_user(user_email)
        if not user: return jsonify({'error': 'User not found'}), 404

        new_task = task_controller.create_task_data(title, description, user.id)
        if not new_task: return jsonify({'error': 'Task creation failed'}), 500

        return jsonify({'created': True}), 200
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500
    

@task.route('/modify_task', methods=['POST'])
@jwt_required()
def modify_task():
    # Updates specific task only if user is logged in 
    # Args: title (str), description(str), cookies (user identity), task_id(int)
    # Returns: 
        # 200 Updated
        # 500 Error
    
    title = request.json.get('task_title')
    description = request.json.get('task_description')
    user_email = get_jwt_identity()
    task_id = request.json.get('task_id')
    try:
        user = user_controller.get_user(user_email)
        if not user: return jsonify({'error': 'User not found'}), 404

        task = task_controller.get_task(task_id)
        updated_task = task_controller.update_task_data(task, title, description)
        if not updated_task: return jsonify({'error': 'Internal server error'}), 500

        return jsonify({'updated': True}), 200
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500


@task.route('/delete_task', methods=['POST'])
@jwt_required()
def delete_task():
    # Deletes existing task only if user is logged in 
    # Args: task_id(str), cookies (user identity)
    # Returns: 
        # 200 created
        # 404 User not found
        # 500 Error
    # return jsonify({'created': True}), 200
    id = request.json.get('task_id')

    try:
        task = task_controller.get_task(id)
        if not task: return jsonify({'error': 'Task not found'}), 404

        removed_task = task_controller.remove_task(task)
        if not removed_task: return jsonify({'error': 'Internal server error'}), 500

        return jsonify({'removed': True}), 200
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500