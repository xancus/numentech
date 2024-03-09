class Config(object):
    FLASK_ENV = 'production'

class DevConfig(Config):
    FLASK_ENV = 'production'
    SQLALCHEMY_DATABASE_URI = "sqlite:///test_db.sqlite"