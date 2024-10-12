from flask import Flask
from flask_cors import CORS

# Create app project
app = Flask(__name__)
CORS(app)

# mock database
db = {"Javier" : {"username": "Javs", "age": 24}, "Diana" : {"username": "Diana123", "age": 25}}

# Routes
@app.route("/")
def index():
    return "<p>Hello, World!</p>"

@app.route("/<name>")
def getUserInfo(name):
    return db[name]

@app.route("/users")
def getAllUsers():
    return db

# Run command: flask run --debug
if __name__ == "__main__":
    app.run(debug=True)