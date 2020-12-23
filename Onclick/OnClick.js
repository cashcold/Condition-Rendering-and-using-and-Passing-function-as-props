import React, { Component } from 'react';
import './style.css'
class OnClick extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            balance: ''
         }
    }
    componentDidMount(){
       
      
    }
    render() { 
        const {balance,handleUserTop,handleLowUp} = this.props
        return ( 
            <div className='onClickMain'>
                <section className='onClick1'>
                    <button onClick={handleUserTop}>Top Up</button>
                    <button onClick={handleLowUp}>Low Balance</button>
                </section>
            </div>
         );
    }
}
 
export default OnClick;