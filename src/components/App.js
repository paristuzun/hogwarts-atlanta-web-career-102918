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

  componentDidMount(){
    this.setState({
      hogs: hogs
    })
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
          <HogContainer
          
          />

      </div>
    )
  }
}

export default App;
