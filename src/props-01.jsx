import React from "react";
import { Age } from "./props-05";

export class Welcome extends React.Component{
    render(){
        
        return(
            <div>
                <p>Welcome, {this.props.name}! </p>
             { this.props.age >= 18 
            ? <Age age={this.props.age}/>
            : null}
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "Gennaro",
}