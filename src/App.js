import React, { Component } from 'react';
import './App.css';
import ChartContainer from './containers/ChartContainer'

class App extends Component {
  render() {

    const genres = [
      {id: 1, name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
      {id: 2, name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
      {id: 3, name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"}
    ]

    return (
      <ChartContainer genres={genres}/>
    );
  }
}

export default App;
