from flask import Flask, render_template, jsonify, request, abort

from flaskext.mysql import MySQL
from flask_cors import CORS

app = Flask(__name__)

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Realmadrid'
app.config['MYSQL_DATABASE_DB'] = 'rohit'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql = MySQL(app)
mysql.init_app(app)
con = mysql.connect()
CORS(app)



@app.route('/api/tasks', methods=['GET'])
def get_all_tasks():
    cur = con.cursor()
    cur.execute("SELECT id,PatientMRN, firstname,lastname,DOB,Address,Phonenumber FROM user")
    rv = cur.fetchall()
    print rv
    return jsonify(rv)


if __name__ == '__main__':
    app.run(debug=True)
