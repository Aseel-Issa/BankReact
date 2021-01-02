import React, { Component } from 'react';
import axios from 'axios';

class Transaction extends Component {

    deleteTransaction(id) {
        axios.delete(`http://localhost:3001/transaction/${id}`)
            .then(res => {
                this.props.loadTransactions()
            })
    }

    render() {
        return (
            <tr className='Transation' id={this.props.transaction._id}>
                <td className='amount' style={this.props.transaction.amount>=0 ? {color: 'green'} : {color: 'red'}}>{this.props.transaction.amount}</td>
                <td className='category'>{this.props.transaction.category}</td>
                <td className='vendor'>{this.props.transaction.vendor}</td>
                <td className='btn'><button className='delete' onClick={() => this.deleteTransaction(this.props.transaction._id)}>X</button></td>
            </tr>
        )
    }

}

export default Transaction;