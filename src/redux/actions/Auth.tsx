import { Dispatch } from 'redux';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../../firebase';

export const SET_USER = 'SET_USER';

export function signInWithEmailAndPwd(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      // ...
      return (dispatch: Dispatch) => {
        dispatch(setAuth(true));
      };
    })
    .catch((error) => {
      alert(error.message);
    });
}

export function logOut() {
  signOut(auth)
    .then(() => {
      return (dispatch: Dispatch) => {
        dispatch(setAuth(true));
      };
    })
    .catch((error) => {
      // An error happened.
    });
}

export function checkAuth() {
  onAuthStateChanged(auth, function (user) {
    if (user) {
      return (dispatch: Dispatch) => {
        dispatch(setAuth(true));
      };
    } else {
      return (dispatch: Dispatch) => {
        dispatch(setAuth(false));
      };
    }
  });
}

export function setAuth(state: boolean) {
  return {
    type: SET_USER,
    payload: state,
  };
}
