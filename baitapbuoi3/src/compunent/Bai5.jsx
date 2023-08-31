import React, { Component } from 'react';

class Bai5 extends Component {
    constructor(props) {
        super(props);
        this.state = { numbers: [], sum: 0 };
      }
    
      handleChange = (event) => {
        const { value } = event.target;
        this.setState({ numbers: value.split(',') });
      }
    
      calculateSum = () => {
        const { numbers } = this.state;
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
          sum += parseInt(numbers[i]);
        }
        this.setState({ sum });
        }
    render() {
        const { sum } = this.state;
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.calculateSum}>Calculate</button>
                <p>Sum: {sum}</p>
            </div> 
        );
    }
}

export default Bai5;