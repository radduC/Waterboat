# from flask_cors import CORS
from flask import Flask, request, jsonify
import json
import datetime

app = Flask(__name__)
# CORS(app)


@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers",
                         "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods",
                         "GET,PUT,POST,DELETE,OPTIONS")
    return response


@app.route("/bookings")
def galerie():
    with open("data.txt") as f:
        data = f.readlines()
        response = {
            'bookingItems': [
                {
                    'fullName': line.split(',')[0],
                    'dateFrom': line.split(',')[1],
                    'dateTo': line.split(',')[2],
                    'phone': line.split(',')[3][:-1],
                }
                for line in data
            ],
            'success': True,
            'time': datetime.datetime.now()
        }
        # print(data)
        # print(response)
    return response


@app.route("/save-booking", methods=["POST"])
def upload():
    if request.method == "POST":
        booking = f"{request.json.get('name')}, {request.json.get('dateFrom')}, {request.json.get('dateTo')}, {request.json.get('phone')}"

        with open("data.txt", "a+") as f:
            f.write(f"{booking}\n")

        return {"success": True, 'time': datetime.datetime.now()}
    else:
        return {"success": False, 'time': datetime.datetime.now()}


if __name__ == "__main__":
    app.run(debug=True)
