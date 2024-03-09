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
    new_task =  Task(title=title, description=description, user_id=user)

    db.session.add(new_task)
    db.session.commit()
    return new_task

def update_task_data(task, title, description):
    task.title = title
    task.description = description

    db.session.commit()

    return task 
