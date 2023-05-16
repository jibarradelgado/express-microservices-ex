const express = require('express')
const app = express()

app.use(express.json())

//Endpoint to process a payment
app.post('/payments', (req, res) => {
  const { customerId, productId } = req.body
  //Payment processing logic here
  res.status(200).json({ message: 'Payment processed' })
})

app.listen(3002, () => {
  console.log('Payments service listening on port 3002')
})