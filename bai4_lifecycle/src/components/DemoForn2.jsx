import React, { Component } from 'react';

class DemoForn2 extends Component {
    constructor(){
        super();
        this.state = {
            course:"html",
        };
    }
    handleChange = (e)=>{
        this.setState({
            course: e.target.value,
        });
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        alert(`khoa hoc tao chon la: ${this.state.course}`);
        this.setState({
            course: "html",
        });
    };
    render() {
        return (
            <div>
               <h3>xu ly form voi selec va option</h3> 
               <form onSubmit={this.handleSubmit}>
                    <label html=''>chon khoa hoc</label>
                    <select onChange={this.handleChange} value={this.state.course}>
                        <option Value="html">html</option>
                        <option value="css">css</option>
                        <option value="java">java</option>
                        <option value="reactjs">reactjs</option>
                    </select>
                    <button type="Submit">Submit</button>
               </form>
            </div>
        );
    }
}

export default DemoForn2;