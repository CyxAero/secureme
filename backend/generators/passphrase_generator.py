from wonderwords import RandomWord
import random

random_word = RandomWord()

def generate_passphrase(words=5, capitalize=False, numbers=False, separator="-"):
    passphrase = []
    for _ in range(words):
        word = random_word.word(word_min_length=4, word_max_length=8)
        if capitalize:
            word = word.capitalize()
        passphrase.append(word)

    if numbers:
        passphrase.append(str(random.randint(0, 999)))

    return separator.join(passphrase)