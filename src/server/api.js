
const express = require('express')
const router = express.Router()
const db = require('./transactionDBManager')

router.get('/sanity', function (request, response) {
    console.log("Ok!")
    response.send('Ok!')
})

// /transactions - a GET route that returns all of the transaction documents
router.get('/transactions', async function (request, response) {
    const results = await db.getAllTransactions()
    response.send(results)
})

// /transaction - a POST route that saves a single transaction into your DB
router.post('/transaction', async function (request, response) {
    const transaction = request.body
    const result = await db.saveTransaction(transaction)
    response.send(result)
})

// /transaction - a DELETE route that deletes a single transaction in your DB
router.delete('/transaction/:id', function (request, response) {
      const results = db.deleteTransactionById(request.params.id)
      response.send(results)
  })

  module.exports = router;