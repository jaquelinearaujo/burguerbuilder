import React, { Component } from 'react';

import UserInput from  './UserInput/UserInput';
import UserOutput from  './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'supermax'
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <UserInput 
          changed={this.usernameChangeHandler} 
          currentName={this.username}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }
}

export default App;
