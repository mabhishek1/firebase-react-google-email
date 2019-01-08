import React, { Component } from 'react'
import config from './config'
import firebase from 'firebase'


export default class LoginWithGoogle extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
       
    }
    // firebase.initializeApp(config)
    this.loginInWithGoogle = this.loginInWithGoogle.bind(this)
    this.logOutWithGoogle = this.logOutWithGoogle.bind(this)
  }

  loginInWithGoogle(){
    let signInWthGoogle = document.getElementById("googlein")
    let signOutWithGoogle = document.getElementById("googleout")

    var Provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(Provider)
      .then((user)=>{
        console.log(user)
        signInWthGoogle.style.display = "none"
        signOutWithGoogle.style.display = "inline-block"
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  logOutWithGoogle(){
    let signInWthGoogle = document.getElementById("googlein")
    let signOutWithGoogle = document.getElementById("googleout")
    firebase.auth().signOut()
      .then((obj)=>{
        console.log("Logged out"+obj)
        signInWthGoogle.style.display = "none"
        signOutWithGoogle.style.display = "block"
      })
      .catch(err=>console.log(err))
  }
  

  render() {
    return (
      <div>
        <button onClick={this.loginInWithGoogle} id="googlein">login With Google</button>
        <button onClick={this.logOutWithGoogle} id="googleout">Logout from Google</button>
      </div>
    )
  }
}
