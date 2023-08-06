const invalidCoinTypeOrCurrencyType = '{\n' + '  "error": "You requested specific single item that we don\\u0027t have at this moment."\n' +'}';
const invalidApiKey = '{\n' +
'  "error": "You didn\\u0027t specify API key or it is incorrectly formatted. You should do it in: query string parameter \\u0060apikey\\u0060,  in http header named \\u0060X-CoinAPI-Key\\u0060,  in http header named \\u0060Authorization\\u0060 or  as part of URL /apikey-YOUR-API-KEY/"\n' +
'}';
module.exports = { invalidCoinTypeOrCurrencyType, invalidApiKey }