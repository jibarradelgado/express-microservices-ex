const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.json())

// Endpoint to place an order
app.post('/placeOrder', async (req, res) => {
  const { customerId, productId } = req.body

  //Call the orders service to create a new order
  try {
    await axios.post('http://localhost:3001/orders', { customerId, productId })
    //Call the payments service to process the payment
    await axios.post('http://localhost:3002/payments', { customerId, productId })
    res.status(200).json({ message: 'Order placed and payment processed'})
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error placing order' })
  }
})

//Start the server
app.listen(3000, () => {
  console.log('Microservices application listening on port 3000')
})