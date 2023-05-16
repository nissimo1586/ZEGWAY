import requests
from bs4 import BeautifulSoup

print("Hello")

url = "https://www.lottozahlen-rechner.de/lottozahlen-datenbank-mit-gewinnzahlen-seit-1955?lotto-art=g&seite=1&startdate=04-08-2021&enddate=04-08-2021#database"
page = requests.get(url)
oup = BeautifulSoup(page.content, 'html.parser')
scraped = [int(td.text.strip()) for td in soup.select('td') if td.text.strip().isdigit()]