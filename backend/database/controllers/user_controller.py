from database import db 
from database.models import User

def get_user(email):
    # Get a user by email
    # Args: email (str)
    # Returns: User or None
    return User.query.filter_by(email=email).first()

def register_user(email, password):
    new_user =  User(email=email, password=password)

    db.session.add(new_user)
    db.session.commit()
    return new_user