from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

def init_db():
    db.create_all()

def recreate_db():
    db.drop_all()
    db.create_all()