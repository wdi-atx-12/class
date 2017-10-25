import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      randomJoke: '',
      isFetchingJoke: false
    }
    this.getRandomJoke = this.getRandomJoke.bind(this);
  }
  componentDidMount(){
    this.getRandomJoke();
  }
  getRandomJoke(){
    this.setState({
      isFetchingJoke: true
    });
    // hit our API to fetch a new Joke
    axios.get('http://api.icndb.com/jokes/random')
    .then((response) => {
      console.log(response.data.value.joke)
      let newJoke = response.data.value.joke
      // update the state with that new joke
      // re render in our UI
      this.setState({
        randomJoke: newJoke,
        isFetchingJoke: false
      })
    }).catch((error) => {
      console.log(error)
    });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.isFetchingJoke ? 'Loading Joke...' : this.state.randomJoke}</h1>
        <button onClick={this.getRandomJoke}>Get A Joke</button>
      </div>
    );
  }
}

export default App;
