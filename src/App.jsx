import React from "react";
import { ClickCounter } from "./clickCounter";

const age = 21;

export class App extends React.Component{
    render(){

        return <div>
                <ClickCounter increment={1}></ClickCounter>
                 </div>
    }
}

