import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {

  render() {
      const data = []
      let balance = 0
      this.props.transactions.forEach(element => {
        balance+= element.amount
          data.push(<Transaction transaction={element} key={element._id} loadTransactions={this.props.loadTransactions}/>)
      });
    ﻿return (
        <div>
    <table className='Transations'>
    <tbody>
        <tr>
            <th className='amount'>Amount</th>
            <th className='category'>Category</th>
            <th className='vendor'>Vendor</th>
            <th className='btn'></th>
        </tr>
        {data}
    </tbody>
    </table>
    <label className='balance' style={balance>=500 ? {color: 'green'} : {color: 'red'}}>Balance: {balance}</label>
    </div>
    )
  }
 
}

export default Transactions;