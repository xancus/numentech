from database import db 
from database.models import User

def get_user(email):
    # Get a user by email
    # Args: email (str)
    # Returns: User or None
    return User.query.filter_by(email=email).first()

def get_user_by_id(id):
    # Get a user by id
    # Args: id (int)
    # Returns: User or None
    return User.query.filter_by(id=id).first()

def register_user(email, password):
    # Register new user
    # Args: email (str), password(str)
    # Returns: User or None
    new_user =  User(email=email, password=password)

    db.session.add(new_user)
    db.session.commit()
    return new_user