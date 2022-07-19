
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
            items:[this.props.items.push(this.state.userInput)],
            userInput:"",
        })
        console.log("ciao",this.state.userInput,this.props.items)
      }
      handleReset = ()=>{
       this.setState({
        items:[this.props.items.splice(0,this.props.items.length)]
       })
      } 
     
      render() {
        return (
          <div>
          <ul>
          {this.props.items.map((li,key) =>  <li {...{key}}>{li} <button onClick={this.props.handleDelete}>Elimina</button></li>)} 
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

export class Wrapper extends React.Component{

  state = {items: [],userInput:'',}

  handleDelete = (event) => {
    let textContentLiAndButton = event.target.parentElement.textContent
    let array = textContentLiAndButton.split(" ")
    array.splice(-1,1)
    let textContentLi = array.join(" ");
    console.log(textContentLi)
    let stateClone = [...this.state.items]
    let index = stateClone.indexOf(textContentLi)
    stateClone.splice(index,1)
    this.setState({
      items:stateClone
    })        
  }
  render(){
    return(

      <div> {this.props.render(this.state.items,this.handleDelete)}</div>
    )
  }
}

export class App extends React.Component{
    render(){
        return <div>
          <Wrapper render={(items,handleDelete)=>{
           return <TodoList items={items} handleDelete={handleDelete}></TodoList>
          }
          }></Wrapper>
        </div>
        
    }
}
