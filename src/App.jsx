import React from "react";
export class TodoList extends React.Component{
    state = {
        items: [],
        userInput: '',
      }
      inputHandler = (event)=>{
      this.setState({
        userInput:event.target.value,
      })
      }
      submitHandler = (event)=>{
        event.preventDefault()
        this.setState({
            items:[...this.state.items,this.state.userInput],
            userInput:"",
        })
      }
      render() {
        return (
          <div>
            <ul>
              {
                this.state.items.map((li,key) => <li {...{key}}>{li}</li>)
              } 
            </ul>
             <form onSubmit={this.submitHandler}>
                <input onChange={this.inputHandler}></input>
                <button type="submit">Submit</button>
             </form>
          </div>
        )
      }
}

export class App extends React.Component{
    render(){
        return <TodoList ></TodoList>
    }
}
