import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    const { count } = this.state;

    return (
        <>
          <button onClick={this.incrementCount}>Click Here</button>
          <p>I was clicked {count} times.</p>
        </>
    );
  }
}

export default App;
