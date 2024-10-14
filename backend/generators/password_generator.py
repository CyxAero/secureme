import string
import random

def generate_password(length=12, uppercase=True, lowercase=True, numbers=True, symbols=True):
    character_set = ''
    if uppercase:
        character_set += string.ascii_uppercase
    if lowercase:
        character_set += string.ascii_lowercase
    if numbers:
        character_set += string.digits
    if symbols:
        character_set += string.punctuation

    if not character_set:
        raise ValueError("At least one character type must be selected")

    return ''.join(random.choice(character_set) for _ in range(length))