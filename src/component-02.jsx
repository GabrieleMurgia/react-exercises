import React from "react";
import { Message } from "./component-07";


export class Hello extends React.Component{
    render(){
        return <h1>Hello World! <Message></Message></h1>
    }
}