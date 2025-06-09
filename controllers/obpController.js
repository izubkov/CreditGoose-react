const { fetchAccounts } = require('../services/obpService');

const getAccounts = async (req, res) => {
  try {
    const data = await fetchAccounts();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAccounts };