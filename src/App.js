import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Route path="/" component={Dashboard} />
        </Router>
      </div>
    );
  }
}
export default App;