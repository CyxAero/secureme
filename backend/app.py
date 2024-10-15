from flask import Flask, request, jsonify
from flask_cors import CORS
from generators.password_generator import generate_password
from generators.passphrase_generator import generate_passphrase
from utils.strength_evaluator import check_strength

app = Flask(__name__)
CORS(app)
# Updated CORS
# CORS(app, resources={r"/api/*": {"origins": ["https://your-frontend-url.com"]}})

@app.route('/api/generate', methods=['POST'])
def generate():
    data = request.json
    gen_type = data['type']
    options = data['options']

    if gen_type == 'password':
        result = generate_password(**options)
    elif gen_type == 'passphrase':
        result = generate_passphrase(**options)
    else:
        return jsonify({'error': 'Invalid generation type'}), 400

    strength_info = check_strength(result)

    return jsonify({
        'generated_text': result,
        'strength': strength_info['score'],
        'crack_time': strength_info['crack_time_display']
    })

# FOR RUNNING LOCALLY
# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000, debug=app.config['DEBUG'])