// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDOkNRsEHiUwwmEvxBSWbEnh7-6V7cr1o",
  authDomain: "login-form-auth-validation.firebaseapp.com",
  projectId: "login-form-auth-validation",
  storageBucket: "login-form-auth-validation.appspot.com",
  messagingSenderId: "204261860956",
  appId: "1:204261860956:web:cdd0e141db4b5ba186e899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
// export default app;