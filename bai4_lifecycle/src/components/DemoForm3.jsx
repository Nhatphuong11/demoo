import React, { Component } from 'react';

class DemoForm3 extends Component {
    constructor(){
        super();
        this.state = {
            StudentName:"",
            studentAge:"",
            course:"html",
        };
    }
    handleChange = (e) => {
        const nameInput = e.target.name;
        const valueInput = e.target.value;
        this.setState({
            [nameInput]: valueInput
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        tênsv:${this.state.StudentName}
        tuổisv:${this.state.studentAge}
        môn:${this.state.course}
        `)
    };
    render() {
        return (
            <div>
                <h3>xu li multpe form input</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>ten sinh vien</label>
                    <input type="text" 
                    onChange={this.handleChange}
                    value={this.state.StudentName}
                    name='StudentName'
                    />
                    <br/>
                    <label>tuoi sinh vien</label>
                    <input type="text" 
                    onChange={this.handleChange}
                    value={this.state.studentAge}
                    name='studentAge'
                    />
                    <br/>
                    <label>chon khoa hoc</label>
                    <select 
                        onChange={this.handleChange} 
                        value={this.state.course}
                        name='course'                      
                    >
                        <option Value="html">html</option>
                        <option value="css">css</option>
                        <option value="java">java</option>
                        <option value="reactjs">reactjs</option>
                    </select>
                    <br/>
                    <button type="Submit">Submit</button>                    
               </form>
            </div>
        );
    }
}

export default DemoForm3;