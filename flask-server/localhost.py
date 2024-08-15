from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)
@app.route("/getresult", methods=['POST'])
def SUM(): 
    try:
        data = request.get_json()
        print(data)
        return jsonify({'result': "hello"}), 200
    except Exception as e:  
        return jsonify({'error': str(e)}), 400

@app.route("/", methods=['GET'])
def ptiny():
    return jsonify({'result': "hello"}), 200

if __name__ == "__main__":
    app.run(debug=True)
