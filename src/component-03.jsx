import React from "react";
import { Hello } from "./component-02";
import { Welcome } from "./props-01";

export class App extends React.Component{
    render(){
        return <div>
                <Hello></Hello>
                <Welcome age={21}/>
                 </div>
    }
}