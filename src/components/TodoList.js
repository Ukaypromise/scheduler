import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleChangeProps={this.props.handleChangeProps}
                deleteTodoProps={this.props.deleteTodoProps}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
