import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'

class App extends Component {

  constructor() {
    super()
    this.state = {
      filter: null
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />

      </div>
    )
  }
}

export default App;
