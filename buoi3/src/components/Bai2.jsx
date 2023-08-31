import React, { Component } from 'react';

class bai2 extends Component {
    constructor(){
        super();
        this.state = {
            text: '',
        };
    }
    handleText =(event)=>{
        this.setState({
            text: event.target.value
        });
    };    
    render() {
        return (
            <div>
                <input type='text' value={this.setState.text} onChange={this.handleText}/>
                <p>{this.state.text}</p>
                <button onClick={this.handleText}>dsds</button>
            </div>
        );
    }
}

export default bai2;