import React from "react";

export class Welcome extends React.Component{
    render(){
        return(
            <p className="component-class">Welcome, Gennaro</p>
        )
    }
}

export class App extends React.Component{
    render(){
        return <Welcome></Welcome>
    }
}
