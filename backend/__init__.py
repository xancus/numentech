from flask import Flask
from flask_cors import CORS
from database import db, init_db

app = Flask(__name__)

# Init the Flask application and the database with the given configuration. Register blueprints to make them accessible in the app context
# Args: config --> configuration object specifying the configuration
# Returns: app
def ini_app(config):
    app.config.from_object(config)
    db.init_app(app)
    with app.app_context():
        from routers.auth import auth as auth_blueprint
        app.register_blueprint(auth_blueprint, url_prefix='/auth')
        from routers.task import task as task_blueprint
        app.register_blueprint(task_blueprint, url_prefix='/task')

        CORS(app)
        init_db()
        return app