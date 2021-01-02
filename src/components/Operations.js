import React, { Component } from 'react';
import axios from 'axios';

class Operations extends Component {

    constructor(props){
        super(props);
        this.state= {
            amount : 0,
            category : '',
            vendor : ''
        }
    }

    amountChange = event => {
        this.setState({ amount: event.target.value });
      }

    categoryChange = event => {
        this.setState({ category: event.target.value });
      }

    vendorChange = event => {
        this.setState({ vendor: event.target.value });
      }

    deposit = () => {
        axios.post(`http://localhost:3001/transaction`, this.state)
        .then(res => {
          this.props.loadTransactions()
        })
    }

    withdrow = () => {
        const record = {}
        record.amount = this.state.amount * (-1)
        record.category = this.state.category
        record.vendor = this.state.vendor
        axios.post(`http://localhost:3001/transaction`, record)
        .then(res => {
          this.props.loadTransactions()
        })
    }

    render() {
        return (
            <table className='operations'>
            <tbody>
                <tr className='amount'>
                    <td>Amount</td>
                    <td><input placeholder='amount...' onChange={event => this.amountChange(event)}></input></td>
                </tr>
                <tr className='vendpr'>
                    <td>Vendor</td>
                    <td><input placeholder='vendor...' onChange={event => this.vendorChange(event)}></input></td>
                </tr>
                <tr className='category'>
                    <td>Category</td>
                    <td><input placeholder='category...' onChange={event => this.categoryChange(event)}></input></td>
                </tr>
                <tr className='Buttons'>
                <td></td>
                    <td><button id='deposit' onClick={this.deposit}>Deposit</button>
                    <button id='withdrow' onClick={this.withdrow}>Withdrow</button></td>
                </tr>
                </tbody>
            </table>
        )
    }

}

export default Operations;