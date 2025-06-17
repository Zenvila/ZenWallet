const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const txSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  date: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', txSchema);

mongoose.connect('mongodb://mongo:27017/wallet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/transactions', async (req, res) => {
  const txs = await Transaction.find();
  const total = txs.reduce((sum, tx) => sum + tx.amount, 0);
  res.json({ totalSpent: total, transactions: txs });
});

app.post('/add', async (req, res) => {
  const tx = new Transaction(req.body);
  await tx.save();
  res.json(tx);
});

app.listen(3000, () => console.log('Backend running on 3000'));

