## Technologies
- **Backend framework:** Flask. Python version 3.9.7
- **Database:** SQLite
- **Authentication:** JWT (JSON Web Tokens)

## Project Structure

```plaintext
/backend
|-- /database
    | -- /controllers
        | -- __init__.py
        | -- task_controller.py
        | -- user_controller.py
    | -- __init__.py
    | -- models.py
|-- /instance
|-- /routers
    | -- __init__.py
    | -- auth.py
    | -- task.py
|-- __init__.py
|-- .gitignore
|-- config.py
|-- README.md
|-- requirements.txt
|-- wsgi.py
```

## Setup
- Use virtualenv to create a new python virtual environment with the provided python version and install requirements.txt
- Run wsgi.py to start your backend service, it will run on port 5000
