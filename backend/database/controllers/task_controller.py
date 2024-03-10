from database import db 
from database.models import Task


def get_all_tasks():
    # Get all tasks from the database
    # Returns: a list of tasks ([task])
    return Task.query.all()


def get_task(id):
    # Get a specific Task by ID
    # Args: ID (int)
    # Returns: Task or None
    return Task.query.filter_by(id=id).first()

def create_task_data(title, description, user):
    # Create new task
    # Args: title (string), description (string) user(User)
    # Returns: Task or None
    new_task =  Task(title=title, description=description, user_id=user)

    db.session.add(new_task)
    db.session.commit()
    return new_task

def update_task_data(task, title, description):
    # Update existing task
    # Args: task (Task) title (string), description (string) 
    # Returns: Task or None
    task.title = title
    task.description = description

    db.session.commit()

    return task 

def remove_task(task):
    # REmove existing task
    # Args: task (Task)
    # Returns: True
    db.session.delete(task)
    db.session.commit()

    return True
