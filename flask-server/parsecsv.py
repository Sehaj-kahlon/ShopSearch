import csv
import os
from utils import words
file_path = 'items.csv'
def search_csv(item_name):
    matching_links = []
    
    with open(file_path, mode='r', newline='', encoding='utf-8') as file:
        reader = csv.reader(file)
        
        for row in reader:
            if(row[0] == item_name):
                matching_links.extend(row[1:])
    return matching_links

def parsecsv(prompt):
    prompt_words = prompt.split()
    for word in words:
        if word in prompt:
            ans = search_csv(word)
            return ans
    return 0
