# CLI Crypto Price Tracker

This is a command-line interface (CLI) tool that allows you to track the prices of various cryptocurrencies in real-time. It uses the CoinAPI to fetch the latest prices and displays them in a user-friendly format.

Register an API key at https://www.coinapi.io/

### Installation

1. Clone the repository:

   HTTPS:
   git clone https://github.com/dhanraj-uchimahali/cli-crypto-price-tracker.git
   
   SSH:
   git clone git@github.com:dhanraj-uchimahali/cli-crypto-price-tracker.git

2. Install dependencies:
```
   npm install
```
3. Run the following command ```npm link``` otherwise your project will not work in CLI.


## Commands

```
# Help & Commands
coindex -h

# Version
coindex -V

# API Key Commands
coindex key set
coindex key show
coindex key remove

# Crypto Check Commands
coindex check price

# Check Specific Coins (default: BTC)
coindex check price --coin=BTC

# Choose Currency (Default: INR)
coindex check price --cur=EUR
```
