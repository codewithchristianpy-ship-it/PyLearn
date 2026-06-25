import json

quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Believe you can and you're halfway there.",
    "Don’t watch the clock; do what it does. Keep going."
]

with open("quotes.json", "w") as f:
    json.dump(quotes, f)

print("quotes.json file created!")