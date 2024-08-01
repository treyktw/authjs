import json
from faker import Faker
import random

def generate_fake_data(num_records=1000):
    fake = Faker()
    users = []

    for _ in range(num_records):
        user = {
            "name": fake.name(),
            "email": fake.email(),
            "password": fake.password(length=12, special_chars=True, digits=True, upper_case=True, lower_case=True)
        }
        users.append(user)

    return users

def save_to_json(data, filename='fake_users.json'):
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False, default=str)

if __name__ == "__main__":
    num_records = 1000
    fake_users = generate_fake_data(num_records)
    save_to_json(fake_users)
    print(f"Generated {num_records} fake user records and saved them to fake_users.json")