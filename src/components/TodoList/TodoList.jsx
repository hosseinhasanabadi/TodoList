import React, { useState } from "react";

import Header from "./Header";
import Todo from "./Todo";

export default function TodoList () {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos: [],
  //     todoTitle: "",
  //     status: "all",
  //   };

  //   this.addTodo = this.addTodo.bind(this);
  //   this.removeTodo = this.removeTodo.bind(this);
  //    this.editTodo = this.editTodo.bind(this)
  //   this.todoTitleHandler = this.todoTitleHandler.bind(this);
  //   // this.statusHandler = this.statusHandler.bind(this)
  // }
  const [todos ,settodos] = useState ([])
  const [todoTitle ,setTodoTitle] = useState ("")

  const [status ,setStatus] = useState ("all")


  const todoTitleHandler =(event)=> {
    // this.setState({
    //   todoTitle: event.target.value,
    // });
    setTodoTitle(event.target.value)
  }
 const addTodo= (event)=> {
    event.preventDefault();
    // let newtodo = {
    //   id: this.state.todos.length + 1,
    //   title: this.state.todoTitle,
    //   completed: false,
    // };
    let newtodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };
    // this.setState((prevState) => {
    //   return {
    //     todos: [...this.state.todos, newtodo],
    //     todoTitle: "",
    //   };
    // });
    settodos(prevState=>{
      return [...prevState, newtodo]
    })
   setTodoTitle('')
  }
  const removeTodo=(todoId)=> {
    // console.log(todoId);
    // let newtodos = this.state.todos.filter((todo) => {
    //   return todo.id !== todoId;
    // });
   
    let newtodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    // this.setState({
    //   todos: newtodos,
    // });
    settodos (newtodos)
  }
  const editTodo=(todoId)=>{
// let newtodos=[...this.state.todos]
let newtodos=[...todos]
newtodos.forEach(todo=>{
    if (todo.id===todoId) {
        todo.completed=!todo.completed
        
    }
})
// this.setState({
//     todos:newtodos
// })
settodos(newtodos)
  }


    return (
      <>
        <Header />
        <form onSubmit={addTodo}>
          <input
            type="text"
            className="todo-input"
            maxLength="40"
            value={todoTitle}
            onChange={todoTitleHandler}
          />
          <button className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select name="todos" className="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>

        <div className="todo-container">
          <ul className="todo-list">
            {todos.map((todo) => (
              <Todo key={todo.id}{...todo} onRemove={removeTodo} onEdit={editTodo} />
            ))}
          </ul>
        </div>
      </>
    );
  }

