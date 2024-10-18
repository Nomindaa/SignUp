export * from "./Signin";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={() => this.increment}>Increase</button>
        <button onClick={() => this.decrement}>Decrease</button>
      </div>
    );
  }
}
