from flask import Flask, jsonify, request
from flask_cors import CORS
from parsecsv import parsecsv

app = Flask(__name__)
CORS(app)
@app.route("/getresult", methods=['POST'])
def SUM(): 
    try:
        data = request.get_json()
        prompt_value = data.get('prompt')
        data = parsecsv(prompt_value)
        return jsonify({'result': data}), 200
    except Exception as e:  
        return jsonify({'error': str(e)}), 400

@app.route("/", methods=['GET'])
def ptiny():
    return jsonify({'result': "hello"}), 200

if __name__ == "__main__":
    app.run(debug=True)
