import React from "react";


export class Container extends React.Component{
  render(){
    return (
      <div className="component-class">
      <div className="component-title">{this.props.title}</div>
       <div className="component-body">{this.props.children}</div>
      </div>
    )
  }
}
export class HelloWorld extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}
export class App extends React.Component{
    render(){
        return <Container title="Che bel titolo">
            <HelloWorld></HelloWorld>
              </Container>
    }
}
