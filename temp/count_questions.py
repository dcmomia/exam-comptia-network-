import json
import os

files = [
    'examen2_batch1.json',
    'examen2_batch2.json', 
    'examen2_batch3.json',
    'examen2_batch4.json',
    'examen2_batch5.json',
    'examen2_batch6.json',
    'examen2_batch7.json'
]

total = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        data = json.load(file)
        count = len(data)
        print(f'{f}: {count} preguntas')
        total += count

print(f'\nTotal: {total} preguntas')
