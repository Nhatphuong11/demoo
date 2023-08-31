import React, { Component } from 'react';

class DemoForm4 extends Component {
    constructor(){
        super();
        this.state = {
            selectRadio: "Male",
        };
    };
    handlechang = (e) =>{
        this.setState({
            selectRadio: e.target.value
        });
    };
    handSubmit = (e) =>{
        e.preventDefault();
        alert(`gioi tinh ${this.state.selectRadio}`)
    };
    render() {
        return (
            <div>
                <h3>xu ly radio trong form</h3>
                <form onSubmit={this.handSubmit}>
                    <input type="radio" value={"male"} name='gerder' onChange={this.handlechang} 
                    checked={this.state.selectRadio === "male"}/>
                    <label>nam</label>
                    <br/>
                    <input type="radio" value={"Female"} name='gerder' onChange={this.handlechang} 
                    checked={this.state.selectRadio === "Female"}/> 
                    <label>nu~</label>
                    <br/>
                    <input type="radio" value={"Other"} name='gerder' onChange={this.handlechang}
                    checked={this.state.selectRadio === "Other"}/>
                    <label>khac</label>
                    <br/>
                    <button type='submit'>submit</button>
                </form>
            </div>
        );
    }
}

export default DemoForm4;