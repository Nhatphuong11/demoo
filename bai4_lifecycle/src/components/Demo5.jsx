import React, { Component } from 'react';

class Demo5 extends Component {
    constructor(props){
        super(props)
        this.state={
            checked:true
        }
        this.handleCheck=this.handleCheck.bind(this)
    }
    handleCheck(){
        this.setState({
            checked:!this.state.checked
        })
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        <input type="checkbox" 
                            onChange={this.handleCheck}
                            defaultChecked={this.state.checked}
                        />
                        fdfd
                    </label> 
                    <label>
                        <input type="checkbox" 
                            onChange={this.handleCheck}
                            defaultChecked={!this.state.checked}
                        />
                        ggfgf
                    </label>  
                                   
                </form>             
            </div>
        );
    }
}

export default Demo5;