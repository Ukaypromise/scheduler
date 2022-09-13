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
      </div>
    );
  }
}

export default TodoItem;
