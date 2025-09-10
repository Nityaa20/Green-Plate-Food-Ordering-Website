from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///meals.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Meal model
class Meal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    is_vegan = db.Column(db.Boolean, default=False)

# Create the database
with app.app_context():
    db.create_all()

# Get all meals
@app.route('/meals', methods=['GET'])
def get_meals():
    meals = Meal.query.all()
    meal_list = [{
        'id': meal.id,
        'name': meal.name,
        'price': meal.price,
        'isVegan': meal.is_vegan
    } for meal in meals]
    return jsonify(meal_list)

# Add a new meal
@app.route('/meals', methods=['POST'])
def add_meal():
    data = request.json
    name = data.get('name')
    price = data.get('price')
    is_vegan = bool(data.get('isVegan'))

    if not name or price is None:
        return jsonify({'error': 'Missing data'}), 400

    new_meal = Meal(name=name, price=price, is_vegan=is_vegan)
    db.session.add(new_meal)
    db.session.commit()

    return jsonify({'message': 'Meal added successfully'}), 201

# Delete a meal
@app.route('/meals/<int:meal_id>', methods=['DELETE'])
def delete_meal(meal_id):
    meal = Meal.query.get_or_404(meal_id)
    db.session.delete(meal)
    db.session.commit()
    return jsonify({'message': 'Meal deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)


