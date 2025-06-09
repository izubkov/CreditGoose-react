const { fetchLoans } = require('../services/squareService');

const getLoans = async (req, res) => {
  try {
    const loans = await fetchLoans();
    res.json(loans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getLoans };