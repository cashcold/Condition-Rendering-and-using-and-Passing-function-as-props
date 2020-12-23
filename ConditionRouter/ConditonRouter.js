import React, { Component } from 'react';
import OnClick from '../Onclick/OnClick';
class ConditionRouter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin: false,
            balance: '0'
            
        }
        this.handleUser = this.handleUser.bind(this)
        this.handleTopUp = this.handleTopUp.bind(this)
        this.handleLowUp = this.handleLowUp.bind(this)
    }
    handleTopUp(){
       this.setState({
           balance: Number(this.state.balance + 1) 
       })
    }
    handleLowUp(){
       this.setState({
           balance: Number(this.state.balance - 1) 
       })
    }
    
    handleUser(){
       this.setState(prev =>{
           return {
            isLogin: !prev.isLogin
           }
       })
    }

    componentDidMount(){
    }
    render() { 
      const LogRouter =  this.state.isLogin == false ? 'YOU HAVE LOGIN OUT' : 'YOU HAVE LOGIN SUCCESSFUL'
      const btnText = this.state.isLogin ? 'Logout' : 'Login ' 
      const balanceDisplay = this.state.balance  && this.state.isLogin == true ?  ' Balance': ''
      const balanceDisplayAmount = this.state.balance  && this.state.isLogin == true ?  `$${this.state.balance}`: ''
      const  balanceDisplayAmounthigh= this.state.isLogin == true &&  Number(this.state.balance) > 10   ?  `You have hight Balance`: null
      const balanceDisplayAmountLow = this.state.isLogin == true &&  Number(this.state.balance) < 10   ?  `Low Balance`: null

      const styleBalanceLow = {
          color: 'red',

      }
      const styleBalancehigh = {
          color: 'green'
      }
        return ( 
            <div className='conditionRouter'>
                <section className='condtionRouter'>
                    <h2>{LogRouter}</h2>
                    <button className='logIcion btn btn-warning' onClick={this.handleUser}>{btnText}</button>
                    <p>{balanceDisplay}</p>
                    <p style={this.state.balance > 10 ? styleBalancehigh : styleBalanceLow }>{balanceDisplayAmount}</p>
                    <p>{balanceDisplayAmountLow}</p>
                    <p>{balanceDisplayAmounthigh}</p>
                </section>
                <section className='onClick'>
                    <OnClick balance={this.state.balance} handleUserTop={this.handleTopUp} handleLowUp={this.handleLowUp} /> 
                </section>
            </div>
         );
    }
}
 
export default ConditionRouter;