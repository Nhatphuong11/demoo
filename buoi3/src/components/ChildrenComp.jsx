import React, { Component } from 'react';

class ChildrenComp extends Component {
    constructor(){
        super();
        this.state = {
            student: "phuong",
            questione:"di bay",
            answer:"khong",
            toggle: false,
        };
    }
    HandleChangeState = () => {
        this.setState({
            answer: "co",
        })
    };

    HandleTogel = () => {
        this.setState({
            toggle: !this.state.toggle,
        });
    };
    render() {       
        return (
            <div>
                <h2>Childrent Comp</h2>
                <h3>Props</h3>
                <p>
                    {this.props.mess} - Course: {this.props.course} - {this.props.Children}
                </p>
                <p>
                    Nguoi dung: {this.props.persons.name} - tuoi: {this.props.persons.age}
                </p>
                <p>state</p>
                <p>
                    {this.state.student} - {this.state.questione}- {this.state.answer}
                </p>
                <button onClick={this.HandleChangeState}>click me</button>
                <h2>toan tu 3 ngoi</h2>
                {this.state.toggle ? (
                <div>
                    <p>co'</p>
                    <button onClick={this.HandleTogel}>click</button>
                </div>
                ):(
                <div>
                    <p>deo'</p>
                    <button onClick={this.HandleTogel}>click!!</button>
                </div>)}
            </div>
        );
    }
}

export default ChildrenComp;
