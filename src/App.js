import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import autoBind  from 'react-autobind'
import Todo from './Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todosToShow:"all"
    }
    autoBind(this);
  }
  //get from child function parameter - newSearchText
  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  toogleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
           ...todo,
           complete: !todo.complete
          };
        } else {
          return todo;
        }
      })    
    });
  };

  updateTodoToShoW = (s) => 
  this.setState({
    todosToShow: s
  });

  render() {
    let todos = [];
    
    if (this.state.todosToShow==="all"){
     todos = this.state.todos;
    } else if (this.state.todosToShow==="active") {
    todos=this.state.todos.filter(todo=>!todo.complete)
    } else if (this.state.todosToShow==="complete") {
      todos=this.state.todos.filter(todo=>todo.complete)
    }
    return (
      <div className="App">
        <Header onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo toogleComplete={()=>this.toogleComplete(todo.id)} key={todo.id} text={todo.text} id={todo.id} complete={todo.complete} />
        ))}
        <button className="mr-1" onClick={()=>this.updateTodoToShoW("all")}>ALL</button>
        <button className="mr-1" onClick={()=>this.updateTodoToShoW("active") } >ACTIVE</button>
        <button className="mr-" onClick={()=>this.updateTodoToShoW("complete")} >COMPLETE</button>
      </div>
    );
  }
}
export default App;
