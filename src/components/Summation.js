import React, { Component } from 'react';

class Summation extends Component {

    render() {

        let records = {}
        this.props.transactions.forEach(element => {
            records[element.category] ? records[element.category] += element.amount : records[element.category] = element.amount
        });
        let table = []
        for (const key in records) {
            table.push(
                <tr className='record'>
                    <td className='category'>{key}</td>
                    <td className='amount'>{records[key]}</td>
                </tr>
            )
        }
        return (
            <table>
                <tbody>
                    <tr className='record'>
                        <th className='amount'>Category</th>
                        <th className='category'>Amount</th>
                    </tr>
                    {table}
                </tbody>
            </table>
        )
    }

}

export default Summation;