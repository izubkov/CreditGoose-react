const axios = require('axios');

const fetchLoans = async () => {
  // Simulación de respuesta real
  return {
    loans: [
      {
        id: 'loan_123',
        amount: 5000,
        status: 'approved',
        issued_at: '2024-01-01'
      }
    ]
  };
};

module.exports = { fetchLoans };