import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useRef, useState } from "react";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [successMessege, setSuccessMessege] = useState('');
    const [loginError, setLoginError] = useState('');
    // declear useRef for forget password
    const emailRef = useRef(null);


    const handleFormSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)


        // reset error 
        setLoginError('');
        // reset success messege
        setSuccessMessege('');

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('logged in')
                // setSuccessMessege('welcome to our world')
                if(userCredential.user.emailVerified){
                    setSuccessMessege('welcome to our world')
                }
                else{
                    setLoginError('please go to your email to verify your account')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                setLoginError(errorMessage)
            });

    }

    // forget/reset password handler
    const handleForgetPassword = () => {
        // console.log('send mail to reset',emailRef.current.value
        // )

        // reset error 
        setLoginError('');
        // reset success messege
        setSuccessMessege('');
        const email = emailRef.current.value;
        if (!email) {
            // console.log('please enter your valid email')
            setLoginError('please enter your valid email')
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            // console.log('email format incorrect')
            setLoginError('email format incorrect');
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {

                alert('please check your email')
                setSuccessMessege('please check your email to reset password');
            })
            .catch(error => {
                // console.log(error.message)
                setLoginError(error.messege);

            })

    }
    return (
        <div className="container mx-auto">
            <div className="border mt-40 bg-green-200 rounded-lg ps-40 ">
                <h3 className="pt-8  text-3xl font-semibold">Please login</h3>
                <form className="py-10 w-2/3" onSubmit={handleFormSubmit}>

                    <input className="border text-2xl px-4 py-2 rounded-md mb-5 w-full"
                        type="email"
                        name="email"
                        ref={emailRef}
                        id=""
                        placeholder="Email"
                    /> <br />
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
                    {/* use ref for reset password */}
                    <p onClick={handleForgetPassword} className="py-4 text-red-700 text-xl">Forget password??</p>
                    <input className="border btn btn-primary text-2xl" type="submit" value="submit" />
                </form>
                {
                    successMessege && <p className='text-green-500 text-2xl'> {successMessege}</p>
                }
                {
                    loginError && <p className="text-2xl text-red-500">{loginError}</p>
                }
                <p className='py-3 text-blue-900 text-xl'>New Here?? Please create an Account first  <Link className='font-bold text-black text-xl' to={'/register'}>Register Now</Link></p>
            </div>
        </div>
    );
};

export default Login;