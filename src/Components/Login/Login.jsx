import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleFormSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('logged in')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <div className="container mx-auto">
            <div className="border mt-40 bg-green-200 rounded-lg ps-40 ">
                <h3 className="pt-8  text-3xl font-semibold">Please login</h3>
                <form className="py-10 w-2/3" onSubmit={handleFormSubmit}>

                    <input className="border text-2xl px-4 py-2 rounded-md mb-5 w-full" type="email" name="email" id="" placeholder="Email" /> <br />
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

                    </div> <br />
                    <p className="py-4 text-red-700 text-xl">Forget password??</p>
                    <input className="border btn btn-primary text-2xl" type="submit" value="submit" />
                </form>
                <p className='py-4 text-blue-900 text-xl'>New Here?? Please create an Account first  <Link className='font-bold text-black text-xl' to={'/register'}>Register Now</Link></p>
            </div>
        </div>
    );
};

export default Login;