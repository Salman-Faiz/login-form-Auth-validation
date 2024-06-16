import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.config';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Register = () => {
  // declare state to catch existing user/error
  const [registerError, setRegisterError] = useState('')
  const [successMessege, setSuccessMessege] = useState('')

// state declared for show password
  const [showPassword, setShowPassword] = useState(false)


  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const ConditionAndTerms = e.target.terms.checked;

    console.log(email, password);


    // reset error
    setRegisterError('');
    // reset success messege
    setSuccessMessege('');


    // password validation
    // 
    if (password.length < 6) {

      setRegisterError('password should be 6 characters or long')
      return;

    }
    // Example:-   else if (!/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(password)) 
    else if (!/[A-Z]/.test(password)) {
      setRegisterError('Use at least one UPPER case character ')
      return;
    }
    else if (!ConditionAndTerms) {
      setRegisterError('please accepted our terms and conditions')
      return;
    }




    // create user using firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // setSuccessMessege('Successfully registered')

        sendEmailVerification(user)
        .then(()=>{
          setSuccessMessege('Account created successfully .... please check your email to verify your account')
        })
        

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage)
        setRegisterError(errorMessage);
        // ..
      });
  }


  return (

    <div className="container mx-auto">
      <div className="border mt-40 bg-blue-200 rounded-lg px-40">
        <h3 className="pt-8  text-3xl font-semibold">Please Register</h3>
        <form onSubmit={handleRegister} className="py-10 space-y-5 w-2/3">
          <input className="border text-2xl px-4 py-2 rounded-md w-full" type="text" name='name' placeholder='Name' /><br />
          <input className="border text-2xl px-4 py-2 rounded-md w-full" type="email" name="email" placeholder="Email" required /> <br />
          <div className='relative '>
            <input className="border text-2xl px-4 py-2 rounded-md w-full"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="password"
              required />
            <span className=' absolute top-5 right-4' onClick={() => { setShowPassword(!showPassword) }}>
              {

                showPassword ? <FaEyeSlash className="w-6 h-5"></FaEyeSlash> : <FaEye className="w-6 h-5"></FaEye>
              }

            </span>

          </div>
          <div className='text-xl font-bold'>
            <input className='w-6 h-5 rounded-xl' type="checkbox" name="terms" id="" />
            <label htmlFor="terms"> Please accept our <span className='underline'><a href="">terms and conditions</a></span></label>
          </div>
          <input className="border btn btn-primary text-2xl" type="submit" value="submit" />


        </form>
        {
          registerError && <p className='text-red-700 text-2xl'>{registerError}</p>
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