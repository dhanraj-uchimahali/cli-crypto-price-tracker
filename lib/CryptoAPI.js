const axios = require("axios");
const colors = require("colors");
const handleAPIError = require('../middleware/errorHandling.middleware');

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey.trim();
    this.baseUrl = `https://rest.coinapi.io/v1/exchangerate/`;
  }
  // Fetching current price from CoinAPI
  async getPriceData(coinOption, curOption) {

    // Formatter for currency
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: curOption,
    });

    try {
      const response = await axios.get(`${this.baseUrl}${coinOption}/${curOption}`,
        {
          headers: {
            "X-CoinAPI-Key": this.apiKey,
          },
        }
      );
      let output = "";
      output += `Coin: ${response.data.asset_id_base.yellow} | Price: ${formatter.format(response.data.rate).green}`;
      
      return output;
    } catch (error) {
      handleAPIError(error)
    }
  }
}

module.exports = CryptoAPI;
