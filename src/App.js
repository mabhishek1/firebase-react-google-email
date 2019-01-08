import React, { Component } from 'react';
import LoginWithEmail from './logininWithEmail'
import LoginWithGoogle from './loginWithGoogle'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
         <center>
         <h2>Login Page</h2>
         < LoginWithEmail/>
         < LoginWithGoogle/>
         </center>
       </div>
      </div>
    );
  }
}

export default App;
