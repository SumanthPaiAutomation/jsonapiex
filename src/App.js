import React, { Component } from 'react';
import Users from './components/Users'
import Posts from './components/Posts'
import Comments from './components/Comments'
class App extends Component {
  render() {
    return (
      <div>
        <Users/>
        <Posts/>
        <Comments/>
       
      </div>
    );
  }
}

export default App;
