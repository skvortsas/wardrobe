import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Tablet from './tablet.js'
import Wardrobe from './wardrobe';
import Nav from './nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
      return (
          <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/weather" component={Tablet} />
                    <Route path="/wardrobe" component={Wardrobe} />
                </Switch>
            </div>
          </Router>
        );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))