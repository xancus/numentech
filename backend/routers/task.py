from flask import Blueprint, jsonify, request
from database.controllers import task_controller, user_controller

task = Blueprint('task', __name__)

@task.route('/get_tasks_data', methods=['GET'])
def get_tasks_data():
    # Returns: list of formatted tasks
    try:
        tasks_list = task_controller.get_all_tasks()
        tasks = [{
            'id': task.id,
            'title': task.title,
            'description': task.description,
            'user_id': task.user_id,
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
        # 200 if task
        # 500 Error
    try:
        task = task_controller.get_task(id)
        if not task: return jsonify({'error': 'Task not found'}), 404
        
        return jsonify({'task': task})
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500


@task.route('/create_task', methods=['POST'])
def create_task():
    # Creates new task only if user is logged in (should use access token to prevent access to this endpoint)
    # Args: title (str), description(str), user_email(str)
    # Returns: 
        # 200 created
        # 404 User not found
        # 500 Error
    try:
        title = request.json.get('task_title')
        description = request.json.get('task_description')
        user_email = request.json.get('task_user')

        user = user_controller.get_user(user_email)
        if not user: return({'error': 'User not found'}), 404

        new_task = task_controller.create_task_data(title, description, user.id)
        if not new_task: return({'error': 'Task creation failed'}), 500

        return jsonify({'created': True}), 200
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500
    
@task.route('/modify_task', methods=['POST'])
def modify_task():
    # Updates specific task only if user is logged in (should use access token to prevent access to this endpoint)
    # Args: title (str), description(str), user_email(str), task_id(int)
    # Returns: 
        # 200 Updated
        # 500 Error
    title = request.json.get('task_title')
    description = request.json.get('task_description')
    user_email = request.json.get('task_user')
    task_id = request.json.get('task_id')
    try:
        user = user_controller.get_user(user_email)
        if not user: return({'error': 'User not found'}), 404

        task = task_controller.get_task(task_id)
        updated_task = task_controller.update_task_data(task, title, description)
        if not updated_task: return jsonify({'error': 'Internal server error'}), 500

        return jsonify({'updated': True}), 200
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500