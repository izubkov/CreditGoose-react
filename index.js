const express = require('express');
const cors = require('cors');
require('dotenv').config();

const squareRoutes = require('./routes/squareRoutes');
const obpRoutes = require('./routes/obpRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => res.json({ message: 'Backend is alive 🧠' }));
app.use('/square', squareRoutes);
app.use('/obp', obpRoutes);

const PORT = process.env.PORT || 3000;
//Teseto
app.post('/process', async (req, res) => {
  const { prompt, source } = req.body;

  try {
    if (source === 'square') {
      const { fetchLoans } = require('./services/squareService');
      const loans = await fetchLoans();
      return res.json({ from: 'square', loans });
    }

    if (source === 'obp') {
      const { fetchAccounts } = require('./services/obpService');
      const accounts = await fetchAccounts();
      return res.json({ from: 'obp', accounts });
    }

    return res.status(400).json({ error: 'Invalid source provided' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Server ready on port ${PORT}`));
