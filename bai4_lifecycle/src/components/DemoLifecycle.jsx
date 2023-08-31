import React, { Component } from 'react';

class DemoLifecycle extends Component {
    componentWillMount(){
        console.log('42');
    }
    componentDidMount(){
        console.log('42r');
    }

    render() {
        return (
            <div>
                demolifecycle
            </div>
        );
    }
}

export default DemoLifecycle;