from __init__ import ini_app

app = ini_app('config.DevConfig')

if __name__ == '__main__':
    # run the application, we could set a port here from the environment vars but we use default 5000
    app.run(debug=True)