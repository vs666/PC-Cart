from script1 import Getprice
from database import processors,gpu,keyb
import time
import json

# This script will run scrapping code for all the materials in the database and 
# modify the prixe of the materials correspondingly.



ob = Getprice()

with open('./processors.json','r+') as f:
    data = json.load(f)
    for index in range(len(data)):
        key = data[index]['category']
        print(key)
        # processors[key]["price"]=ob.fetch_cost_walmart(value["url"])
        # print(processors[key]["price"])
        # print(type(processors[key]["price"]))
        for company,urls in processors[key]["url"].items():
            (cc,dd) = ob.fetch_cost(company,urls)
            print(dd)
            if processors[key]["price"] == 0 or processors[key]["price"] > cc :
                processors[key]["price"] = cc
                data[index]['url'] = urls
                print(company,"had better price")
        processors[key]["timestamp"] = time.time()
        # print(processors[key])
        data[index]['price'] = processors[key]["price"]
        f.seek(0)
    json.dump(data,f,indent=4)
    f.truncate()


with open('./gpu.json','r+') as f:
    data = json.load(f)
    for index in range(len(data)):
        key = data[index]['category']
        print(key)
        # processors[key]["price"]=ob.fetch_cost_walmart(value["url"])
        # print(processors[key]["price"])
        # print(type(processors[key]["price"]))
        for company,urls in gpu[key]["url"].items():
            cc,dd = ob.fetch_cost(company,urls)
            # print(dd)
            # print(cc)
            if (gpu[key]["price"] == 0 or gpu[key]["price"] > cc)  and (cc != -1):
                gpu[key]["price"] = cc
                data[index]['img'] = dd
                data[index]['url'] = urls
                print(company,"had better price")
        gpu[key]["timestamp"] = time.time()
        # print(processors[key])
        data[index]['price'] = gpu[key]["price"]
        f.seek(0)
    json.dump(data,f,indent=4)
    f.truncate()


with open('./keyb.json','r+') as f:
    data = json.load(f)
    for index in range(len(data)):
        key = data[index]['category']
        print(key)
        # processors[key]["price"]=ob.fetch_cost_walmart(value["url"])
        # print(processors[key]["price"])
        # print(type(processors[key]["price"]))
        for company,urls in keyb[key]["url"].items():
            cc,dd = ob.fetch_cost(company,urls)
            # print(dd)
            # print(cc)
            if (keyb[key]["price"] == 0 or keyb[key]["price"] > cc)  and (cc != -1):
                keyb[key]["price"] = cc
                data[index]['img'] = dd
                data[index]['url'] = urls
                print(company,"had better price")
        keyb[key]["timestamp"] = time.time()
        # print(processors[key])
        data[index]['price'] = keyb[key]["price"]
        f.seek(0)
    json.dump(data,f,indent=4)
    f.truncate()
