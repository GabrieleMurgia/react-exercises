import React from "react";
import { Hello } from "./component-02";
import { Welcome } from "./props-01";
import { Age } from "./props-05";

const age = 21;

export class App extends React.Component{
    render(){

        return <div>
                <Hello></Hello>
                <Welcome name={"John"} age={17}/>
                 </div>
    }
}

