const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bankDB', { useNewUrlParser: true })

const Schema = mongoose.Schema

const transactionSchema = new Schema({
    amount: Number,
    vendor: String,
    category: String
})

const Transaction = mongoose.model('transaction', transactionSchema)

const saveTransaction = async function(transactionObj){
    try{
        const transaction = new Transaction(transactionObj)
        const response = await transaction.save()
        return response
    }catch(e){
        return e.toString()
    }
    
}

const getAllTransactions = async function(){
    try{
        let data = await Transaction.find({})
        return data
    }catch(e){
        return e.toString()
    }
}

const deleteTransactionById = async function(id){
    try{
        let deleted = await Transaction.findOneAndDelete({_id: id})
        return deleted
    }catch(e){
        return e.toString()
    }
}

module.exports = {
    saveTransaction,
    getAllTransactions,
    deleteTransactionById
}