from datetime import timedelta
# Set up your project config
# JWT properties, database URI, and CORS

class Config(object):
    FLASK_ENV = 'production'
    JWT_SECRET_KEY = 'test-jwt'
    JWT_COOKIE_SECURE = False
    JWT_TOKEN_LOCATION = ['cookies']
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(days=15)
    JWT_SESSION_COOKIE = False
    JWT_COOKIE_CSRF_PROTECT = False
    CORS_SUPPORTS_CREDENTIALS = True
    CORS_EXPOSE_HEADERS = 'Set-Cookie'

class DevConfig(Config):
    FLASK_ENV = 'development'
    SQLALCHEMY_DATABASE_URI = "sqlite:///test_db.sqlite"
    WTF_CSRF_ENABLED = False