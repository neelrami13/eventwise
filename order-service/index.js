const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

let orders = [];

app.post('/orders', async (req, res) => {
  const order = req.body;
  orders.push(order);

  // Simulate user-service call (optional)
  try {
    const userResponse = await axios.get(`http://user-service:3001/users`);
    console.log("Fetched users:", userResponse.data);
  } catch (err) {
    console.error("Error calling user-service:", err.message);
  }

  res.status(201).json({ message: 'Order placed', order });
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(3002, () => {
  console.log('Order service running on port 3002');
});
