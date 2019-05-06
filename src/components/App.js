import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {

  state = {
    hogs: [],
    sortBy: "default",
    filterGreasedHogs: false
  }

  filter = (greasedstatus) => {
    if (greasedstatus == "true") {
      this.setState({
        filter: true
      })
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
