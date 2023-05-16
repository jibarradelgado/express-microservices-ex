const express = require('express')
const app = express()

app.use(express.json())

//In-memory database 
const orders = []

// Endpoint to retrieve all orders
app.get('/orders', (req, res) => {
  res.json(orders)
})

app.post('/orders', (req, res) => {
  const { customerId, productId } = req.body
  orders.push({customerId, productId})
  res.status(201).json({ message: 'Order created' })
})

app.listen(3001, () => {
  console.log('Orders service listening on port 3001')
})