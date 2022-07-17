import React from "react";


export class Container extends React.Component{
  render(){

    return (
      <div className="component-class">
        {this.props.children}
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
        return <Container>
            <HelloWorld></HelloWorld>
              </Container>
    }
}
