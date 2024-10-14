import zxcvbn

def check_strength(password):
    result = zxcvbn.zxcvbn(password)
    return {
        'score': result['score'],
        'crack_time_display': result['crack_times_display']['offline_slow_hashing_1e4_per_second']
    }