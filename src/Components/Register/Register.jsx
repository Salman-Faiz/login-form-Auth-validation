import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.config';

const Register = () => {
  // declare state to catch existing user/error
  const [existingEmailError, setExistingEmailError] = useState('')
  const [successMessege, setSuccessMessege] = useState('')
  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    // reset error
  setExistingEmailError('');
  // reset success messege
  setSuccessMessege('');

    // create user using firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        setSuccessMessege('Successfully registered')

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage)
        setExistingEmailError(errorMessage);
        // ..
      });
  }
  return (

    <div className="container mx-auto">
      <div className="border mt-40 bg-blue-200 rounded-lg text-center">
        <h3 className="pt-8  text-3xl font-semibold">Please Register</h3>
        <form onSubmit={handleRegister} className="py-10 space-y-5">
          <input className="border text-2xl px-4 py-2 rounded-md" type="text" name='name' placeholder='Name' /><br />
          <input className="border text-2xl px-4 py-2 rounded-md" type="email" name="email" placeholder="Email" /> <br />
          <input className="border text-2xl px-4 py-2 rounded-md" type="password" name="password" placeholder="password" /> <br />
          <input className="border btn btn-primary text-2xl" type="submit" value="submit" />


        </form>
        {
          existingEmailError && <p className='text-red-700 text-2xl'>{existingEmailError}</p>
        }
        {
          successMessege && <p className='text-green-500 text-2xl'> {successMessege}</p>
        }


        <p className='py-4 text-green-600 text-2xl font-bold'>Already have an account?? Please go to <Link className='font-bold text-black text-xl' to={'/login'}>Login</Link></p>
      </div>

    </div>
  );
};

export default Register;