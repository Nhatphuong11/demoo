import React, { Component } from 'react';

class DemoForm1 extends Component {
    constructor(){
        super();
        this.state = {
            text:"",
        };
    }
    handleChanginput = (e) => {
        this.setState({
            text: e.target.value,
        });
    }
    handleSubmit =(e) => {
        e.event.preventDefault();
        console.log(`ten tao la: ${this.state.text}`);
        this.setState({
            text: "",
        });
    };
    render() {
        return (
            <div>
                <h3>xu li form</h3>
                <form onSubmit={this.handleChanginput}>
                    <input type="text"
                    value={this.state.text} 
                    onChange={this.handleChanginput}/>
                    <button type='submit'>click</button>
                </form>
            </div>
        );
    }
}

export default DemoForm1;