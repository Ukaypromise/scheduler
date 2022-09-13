import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    return (
      <div className="input-container">
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />{" "}
        <li className="todoItem">{this.props.todo.title}</li>
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default TodoItem;
