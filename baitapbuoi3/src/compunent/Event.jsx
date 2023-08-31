import React, { Component } from 'react';

class Event extends Component {
    constructor(){
        super();
        this.state = {};
        
    };
    HandleClick = () => {
        console.log("button a1");
    }
    HandleClick2 = () => {
        console.log("button a2");
    }
    HandleClick3 = () => {
        console.log("button a2");
    }
    HandleClick4 = () => {
        console.log("button a2");
    }

    render() {
        return (
            <div>
                <h3>event</h3>
                <button onClick={this.HandleClick}>click1</button>
                <button onClick={this.HandleClick2}>click2</button>
                <button onClick={this.HandleClick3}>click3</button>
                <button onClick={() => this.HandleClick4("concac")}>click4</button>
            </div>
            

        );
    }
}

export default Event;