import React, { Component } from "react";

export class ClassComponent extends Component {
  componentDidMount() {
    console.log(
      "Class Component --> This will run after the component is displayed"
    );
  }

  componentWillUnmount() {
    console.log(
      "Class Component --> This will run when the component is removed"
    );
  }

  componentDidUpdate() {
    console.log(
      "Class Component --> This will run when the component is updated"
    );
    console.log(this.props.theme);
  }

  render() {
    return (
      <div>
        <h1>This is a class component</h1>
      </div>
    );
  }
}
