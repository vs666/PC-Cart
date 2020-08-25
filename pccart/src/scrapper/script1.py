import requests
from bs4 import BeautifulSoup

# --------------------------------------------------------------------------------------------------------

# This is python script that contains the class for getting price of any product given the URL is provided.
# This script scrapes the page to return the price
# Currently applicable for only walmart
# ---------------------------------------------------------------------------------------------------------

# @author : Varul Srivastava

# ---------------------------------------------------------------------------------------------------------

class Getprice:
    def __init__(self):
        pass

    def fetch_cost_walmart(self,url):
        page = requests.get(url)
        soup = BeautifulSoup(page.text,'html.parser') # soup contains the entire webpage in html format.
        price = soup.find(class_="price-characteristic") # the price characterstic is same for every product page in walmart
        imageURL = soup.find(itemprop="image")
        iurl = str(imageURL["src"])
        try:
            price_val = float(price.text)
            return price_val, iurl # return price is in dollars
        except:
            return -1,iurl # exception price, handled by caller process

    def fetch_cost_ebay(self,url):
        page = requests.get(url)
        soup = BeautifulSoup(page.text,'html.parser')
        price = soup.find(class_="notranslate")
        imageURL = soup.find(itemprop="image")
        iurl = "NA"
        try:
            iurl = str(imageURL["src"])
            price_val = float(price.text[4:])
            return price_val,iurl
        except:
            return -1,iurl

    def fetch_cost(self,company,url):
        if company == "ebay":
            return self.fetch_cost_ebay(url)
        elif company == "walmart":
            return self.fetch_cost_walmart(url)
        else:
            print("Invalid Company")
            print("Check/Update python script")
# ----------------------------------------------------------------------------------------------------------

