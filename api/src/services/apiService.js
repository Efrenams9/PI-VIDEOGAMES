// api/src/services/apiService.js
const axios = require('axios');

const apiKey = '1cd5f1b1cc914e61916e030b1c25d86d';

const apiService = axios.create({
  baseURL: 'https://api.rawg.io/v1/', // Reemplaza con la URL base de la API
  headers: {
    'Authorization': `Bearer ${apiKey}`,
  },
});

module.exports = apiService;
