const { invalidCoinTypeOrCurrencyType, invalidApiKey } = require('../middleware/error.messages');

// Handling errors
const handleAPIError = (error) => {
    if (error.response.status == 500 && error.response.data.error === invalidCoinTypeOrCurrencyType ) {
      throw new Error(`Enter a valid coin type or currency type.`);
    } else if (error.response.status == 500 && error.response.data.error === invalidApiKey ) {
      throw new Error(`Enter a valid API key.`);
    } else {
      throw new Error(`something is wrong.`)
    }
};
module.exports = handleAPIError