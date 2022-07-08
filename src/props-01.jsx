import React from "react";
import { Age } from "./props-05";
import { Counter } from "./state-01";

export class Welcome extends React.Component{
    render(){
        
        return(
            <div>
                <p>Welcome, {this.props.name}! </p>
                 <Age age={this.props.age}/>
                 <Counter></Counter>
                 </div>
        )
    }
}

Welcome.defaultProps = {
    name: "Gennaro",
}