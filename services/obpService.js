const axios = require('axios');

const fetchAccounts = async () => {
  // Simulación de respuesta OBP
  return {
    accounts: [
      {
        id: 'acc_456',
        balance: 1234.56,
        currency: 'EUR',
        owner: 'John Doe'
      }
    ]
  };
};

module.exports = { fetchAccounts };