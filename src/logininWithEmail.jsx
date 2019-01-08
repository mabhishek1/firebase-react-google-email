import React, { Component } from 'react'
import config from './config'
import firebase from 'firebase'

export default class logininWithEmail extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
         
      }
      firebase.initializeApp(config);
      this.logininWithEmail = logininWithEmail.bind(this)
      this.loginEmail = this.loginEmail.bind(this)
      this.loginEmailSignIn = this.loginEmailSignIn.bind(this)
      this.logOut = this.logOut.bind(this)
    }
    
    loginWithEmail(){
        let emailId = document.getElementById('email')
        let password = document.getElementById('password')
        let signin = document.getElementById("signin")
        let signup = document.getElementById("signup")
        password.style.display  ="block"
        emailId.style.display = "block";
        signin.style.display = "inline-block"
        signup.style.display = "inline-block"
    }

    loginEmail(){
        let emailId = document.getElementById('email').value
        let password = document.getElementById('password').value
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((user)=>{
          firebase.auth().onAuthStateChanged(user=>{
            if (user){
              var displayName = user.displayName;
              var email = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              console.log(displayName,email,emailVerified,photoURL,isAnonymous,uid,providerData)
            }
            else{
              console.log("User not signed in")
            }
          })
        })
          .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
          })

    }

    loginEmailSignIn(){

      let emailId = document.getElementById('email').value
      let password = document.getElementById('password').value
      let logOut = document.getElementById('logout')
      let signIn = document.getElementById('signin')
      let signUp = document.getElementById('signup')
      
      firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then((user)=>{
          firebase.auth().onAuthStateChanged(user=>{
            if (user){
              var displayName = user.displayName;
              var email = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              logOut.style.display = "inline-block"
              signIn.style.display = "none"
              signUp.style.display = "none"
              console.log(displayName,email,emailVerified,photoURL,isAnonymous,uid,providerData)
            }
            else{
              console.log("User not signed in")
            }
          })
        })
        .catch(error=>{

          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode,errorMessage)
        })

        
        
    }

    logOut(){
      let logOut = document.getElementById('logout')
      let signIn = document.getElementById('signin')
      let signUp = document.getElementById('signup')

        firebase.auth().signOut()
          .then((user)=>{
            logOut.style.display = "none"
            signIn.style.display = "inline-block"
            signUp.style.display = "inline-block"
          })
          .catch(err=>console.log("hiiii222"+err))     
    }
  render() {
    return (
      <div>
        <button onClick={this.loginWithEmail}>Login With Email</button>
        <br/>
        <input  type="email" name="" id="email" placeholder='Enter Email'/>
        <input type="password" name="" id="password" placeholder='Enter password'/>
        <button onClick={this.loginEmailSignIn} type="signIn" id="signin">SignIn</button>
        <button onClick={this.loginEmail} type="signUp" id="signup">SignUp</button>
        <button onClick={this.logOut} type="logOut" id="logout">LogOut</button>
        
      </div>
    )
  }
}
