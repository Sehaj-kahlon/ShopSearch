from flask import Flask, jsonify, request
from flask_cors import CORS

app  = Flask(__name__)
CORS(app)
@app.route("/getresult", methods = ['POST', 'OPTIONS'])
def SUM(): 
    try:
        data = request.get_json()
        print(data)
        return jsonify({'result': "hello"}), 200
    except Exception as e:  
        return jsonify({'error': str(e)}), 400
    

if __name__ == "__main__":
    app.run(debug = True)