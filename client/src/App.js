import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = {cities: []}
  async componentDidMount() {
    const response = await fetch('http://api.cali.dev/cities', { credentials: 'same-origin'})
    const cities   = await response.json()
    this.setState({cities: cities})
  }
  render() {
    return (
      <div>
        <h2>> cali.dev</h2>
        <ul>
          {this.state.cities.map( city => {
            return <li key={city.name}> <b>{city.name}</b>: {city.population}</li>
          })}
        </ul>
      </div>
    );
  }
}
export default App;
