import requests

chuck_norris_api = 'https://api.chucknorris.io/jokes/random'

x = requests.get(chuck_norris_api)

request_json = x.json()

print (request_json['value'])
