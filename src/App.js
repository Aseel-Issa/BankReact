import './App.css';
import axios from 'axios';
import Transactions from'./components/Transactions'
import Operations from './components/Operations'
import Summation from './components/Summation'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super()
    this.state = {
        transactions: []
    }
}

loadTransactions = () => {
  axios.get(`http://localhost:3001/transactions`)
  .then(res => {
    const transactions = res.data;
    this.setState({ transactions: transactions });
  })
}

componentDidMount() {
  this.loadTransactions()
}

  render() {
    return (
      <div className="App">
      <Router>
            <Link to="/transactions">Transactions</Link>
            &nbsp;&nbsp;
            <Link to="/operations">Operations</Link>
            &nbsp;&nbsp;
            <Link to="/summation">Summation of transactions per category</Link>
            <Route path="/transactions" component={() => <Transactions transactions={this.state.transactions} loadTransactions={this.loadTransactions}/>}/>
            <Route path="/operations" component={() => <Operations loadTransactions={this.loadTransactions}/>}/>
            <Route path="/summation" component={() => <Summation transactions={this.state.transactions}/>}/>
        </Router>
        
        
      ﻿</div>
     );
    }
  }

export default App;
