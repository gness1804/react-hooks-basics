import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Counter from './Counter';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <>
            <Route exact path="/" component={Login} />
            <Route path="/counter" component={Counter} />
            <Route path="/register" component={Register} />
          </>
        </Router>
      </>
    );
  }
}

export default App;
