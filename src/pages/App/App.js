import React, {Component} from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
import * as puppyAPI from '../../services/puppies-api'

class App extends Component {
  state = {
    puppies: []
  };

  async componentDidMount() {
    const puppies = await puppyAPI.getAll()
    this.setState({puppies})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Puppies CRUD
          <nav>
            <NavLink exact to='/'>PUPPIES LIST</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/add'>ADD PUPPY</NavLink>
          </nav>
        </header>
        <main>
          
        </main>
      </div>
    )
  }
}

export default App;
