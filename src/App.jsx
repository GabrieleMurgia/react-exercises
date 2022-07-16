import React from "react";
export class TodoList extends React.Component{
    state = {
        items: [],
        userInput:'',
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
      handleReset = ()=>{
        this.setState({
          items:[]
        })
      }
      handleDelete = (event)=>{
        let textContentLiAndButton = event.target.parentElement.textContent
        let array = textContentLiAndButton.split(" ")
        array.splice(-1,1)
        let textContentLi = array.join(" ");
        console.log(textContentLi)
        let stateClone = [...this.state.items]
        let index = stateClone.indexOf(textContentLi)
        stateClone.splice(index,1)
        console.log(stateClone)
        this.setState({
          items:stateClone
        })

       

        
      }
      render() {
        return (
          <div>
            <ul>
              {
                this.state.items.map((li,key) =>  <li {...{key}}>{li} <button onClick={this.handleDelete}>Elimina</button></li>)
              } 
            </ul>
             <form onSubmit={this.submitHandler}>
                <input  value={this.state.userInput} onChange={this.inputHandler}></input>
                <button type="submit">Submit</button>
             </form>
             <button onClick={this.handleReset}>Reset UL</button>
          </div>
        )
      }
}

export class App extends React.Component{
    render(){
        return <TodoList></TodoList>
    }
}
