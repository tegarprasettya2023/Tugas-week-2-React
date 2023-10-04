// Functional Component
// Import React and ReactDOM libraries
const { useState } = React;
const { render } = ReactDOM;

// Counter component
function Counter() {
    const [count, setCount] = useState(0);

    // Function to increment the count
    const increment = () => {
        setCount(count + 1);
    };

    // Function to decrement the count
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h1>{count.toString().padStart('0')}</h1>
            <button onClick={decrement}>- 1</button>
            <button onClick={increment}>+ 1</button>
        </div>
    );
}

// Render the Counter component to the root div
render(<Counter />, document.getElementById('root'));


// Class Component
// Import React and ReactDOM libraries
const { Component } = React;
const { render } = ReactDOM;

// Counter component as a class
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Function to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Function to decrement the count
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.count.toString().padStart('0')}</h1>
        <button onClick={this.decrement}>- 1</button>
        <button onClick={this.increment}>+ 1</button>
      </div>
    );
  }
}

// Render the Counter component to the root div
render(<Counter />, document.getElementById('root'));