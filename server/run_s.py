from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://event_min_user:xFq2u56-vdD2@localhost:3306/event_min'  # MySQL connection URL
db = SQLAlchemy(app)

# Event model
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    date = db.Column(db.String(20))
    time = db.Column(db.String(10))
    image = db.Column(db.String(200))
    location = db.Column(db.String(100))
    description = db.Column(db.Text)
    video = db.Column(db.String(200))


    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'date': self.date,
            'time': self.time,
            'image': self.image,
            'location': self.location,
            'description': self.description,
			'video': self.video
        }

@app.route('/api/events')
def get_events():
    # Retrieve events from the database
    events = Event.query.all()

    # Convert events to a list of dictionaries
    event_list = [event.to_dict() for event in events]

    # Return events as JSON response
    return jsonify(event_list)

if __name__ == '__main__':
    app.run(host='0.0.0.0')
