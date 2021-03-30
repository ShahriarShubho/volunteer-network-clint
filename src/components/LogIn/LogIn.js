import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebseConfiq';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }


const LogIn = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();


  let { from } = location.state || { from: { pathname: "/" } };

    var googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    const {displayName, email} = result.user;
    const newUser = {name: displayName, email: email}
    setLoggedInUser(newUser);
    history.replace(from);

  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });

    }
    return (
        <div>
            <h2>Please Log In</h2>

            <button className="btn btn-primary" onClick={handleGoogleLogin}>Sing Up with Google</button>
        </div>
    );
};

export default LogIn;