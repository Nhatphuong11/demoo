import React, { Component } from 'react';
import ChildrenComp from './ChildrenComp';
class ParentComp extends Component {
    render() {
        const greeting = "Hello";
        const person ={
            name: "phuong",
            age: 20
        }; 
        return (
            <div>
                <h2>ParentComp</h2>
                <ChildrenComp mess={greeting} course={"ReactJS"} persons={person}> 
                    helloworld
                </ChildrenComp>           
            </div>
        );
    }
}

export default ParentComp;