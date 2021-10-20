"use strict";
exports.__esModule = true;
exports.setAuth = exports.SET_USER = void 0;
exports.SET_USER = 'SET_USER';
// export function signInWithEmailAndPwd(email: string, password: string) {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       // const user = userCredential.user;
//       // ...
//       return (dispatch: Dispatch) => {
//         dispatch(setAuth(true));
//       };
//     })
//     .catch((error) => {
//       alert(error.message);
//     });
// }
// export function logOut() {
//   signOut(auth)
//     .then(() => {
//       return (dispatch: Dispatch) => {
//         dispatch(setAuth(false, ''));
//       };
//     })
//     .catch((error) => {
//       // An error happened.
//     });
// }
// export function checkAuth() {
//   onAuthStateChanged(auth, function (user) {
//     if (user) {
//       return (dispatch: Dispatch) => {
//         dispatch(setAuth(true));
//       };
//     } else {
//       return (dispatch: Dispatch) => {
//         dispatch(setAuth(false));
//       };
//     }
//   });
// }
function setAuth(state, email) {
    return {
        type: exports.SET_USER,
        payload: { state: state, email: email }
    };
}
exports.setAuth = setAuth;
