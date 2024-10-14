from flask import Blueprint, request, jsonify
from generators.password_generator import generate_password
from generators.passphrase_generator import generate_passphrase
from utils.strength_evaluator import evaluate_strength

api_bp = Blueprint('api', __name__)

@api_bp.route('/generate-password', methods=['POST'])
def generate():
    data = request.json
    generation_type = data.get('type')
    options = data.get('options', {})

    if generation_type == 'password':
        password = generate_password(
            length=options.get('length', 12),
            use_uppercase=options.get('useUppercase', True),
            use_lowercase=options.get('useLowercase', True),
            use_digits=options.get('useDigits', True),
            use_special=options.get('useSpecial', True)
        )
    elif generation_type == 'passphrase':
        password = generate_passphrase(
            num_words=options.get('numWords', 4),
            separator=options.get('separator', ' ')
        )
    else:
        return jsonify({'error': 'Invalid generation type'}), 400

    strength_info = evaluate_strength(password)

    return jsonify({
        'password': password,
        'strength': strength_info['score'],
        'feedback': strength_info['feedback'],
        'crackTimeSeconds': strength_info['crack_times_seconds']['offline_slow_hashing_1e4_per_second'],
        'crackTimeDisplay': strength_info['crack_times_display']['offline_slow_hashing_1e4_per_second']
    })