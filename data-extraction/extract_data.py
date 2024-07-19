import pandas as pd
import json

# Load the Excel file
file_path = './assignment_data.xlsx'  # Adjust the path to point to the root directory
data = pd.read_excel(file_path)

# Convert the data to a dictionary format for JSON serialization
data_dict = data.to_dict(orient='records')

# Save the data to a JSON file
with open('./backend/data.json', 'w') as json_file:  # Adjust the path to save in backend directory
    json.dump(data_dict, json_file)
