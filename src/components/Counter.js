import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAccount, withdrawFromAccount, depositIntoAccount } from '../store/actions';

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createAccount: () => dispatch(createAccount()),
        withdrawFromAccount: (amount) => dispatch(withdrawFromAccount(amount)),
        depositIntoAccount: (amount) => dispatch(depositIntoAccount(amount))
    };
};

class Counter extends Component {
    constructor(props){
        super(props);        
        this.props.createAccount();           
    }

    componentDidMount(){
        this.refs.amount.value = "";     
    }

    deposit = () => {
        console.log(this.refs.amount.value);
        this.props.depositIntoAccount(Number(this.refs.amount.value));
        this.refs.amount.value = '';
    } 

    withdraw = () => {        
        this.props.withdrawFromAccount(Number(this.refs.amount.value));
        this.refs.amount.value = '';
    }; 

    render() {
        const { counter } = this.props;        
       
        return (
            <div>
                <header>FlixTrust Bank</header>
                <h1>Your balance is ${ (counter.balance).toFixed(2) }</h1>
                <div className="atm">
                    <input type="number" placeholder="Enter Amount" ref="amount" />
                    <br/>
                    <button onClick={this.withdraw}>Withdraw</button>
                    <button onClick={this.deposit}>Deposit</button>
                </div>                                
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);