import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    return (
      <>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />{" "}
        <li>{this.props.todo.title}</li>
      </>
    );
  }
}

export default TodoItem;
