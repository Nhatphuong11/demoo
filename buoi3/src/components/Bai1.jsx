import React, { Component } from 'react';

class Bai1 extends Component {
    constructor(){
        super();
        this.state = {
            text: '',
        };
    }
    handleText =()=>{
        this.setState({
            text:'kok',  
        });
    };    
    render() {
        return (
            <div>
                <p>
                    {this.state.text}
                </p>
                <button onClick={this.handleText}>fdfd</button>
            </div>
        );
    }
}

export default Bai1;
