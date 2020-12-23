import React, { Component } from 'react';
import './style.css'
class ConditionlRendering extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'bob',
            unreadMessages: [
            ]
         }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                unreadMessages: [
                    'Please help me to pay my dating site',
                    'I Have sent you $578, check your wallet',
                    'I will come to your house'
                ]
            })
        },9000)
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                unreadMessages: [
                    'Please help me to pay my dating site',
                    'I Have sent you $578, check your wallet',
                    'I will come to your house',
                    'Dont send the R3M machine'
                ]
            })
        },9000)
    }
    render() { 
        const messages = this.state.unreadMessages.length > 3 ? `You have ${this.state.unreadMessages.length} New message` : ''
        const lastMessage = this.state.unreadMessages.length < 3 ? `You no New Message ` : ''
        const checkMessage = this.state.name == 'bob' ? `Welcome ${this.state.name} nice to meet you today` : 'Welcome Unknow user '
        return ( 
            <div className='conditionMain'>
                <h1>{messages}</h1>
                <p>{lastMessage}</p>
                <h3>{checkMessage}</h3>
            </div>
         );
    }
}
 
export default ConditionlRendering;