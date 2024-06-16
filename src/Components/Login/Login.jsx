import { Link } from "react-router-dom";

const Login = () => {
    const handleFormSubmit = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
    }
    return (
       <div className="container mx-auto">
         <div className="border mt-40 bg-green-200 rounded-lg ps-40 ">
            <h3 className="pt-8  text-3xl font-semibold">Please login</h3>
           <form  className="py-10" onSubmit={handleFormSubmit}>
           
            <input className="border text-2xl px-4 py-2 rounded-md mb-5 w-2/3" type="email" name="email" id="" placeholder="Email" /> <br />
            <input className="border text-2xl px-4 py-2 rounded-md w-2/3" type="password" name="password" id="" placeholder="password" /> <br />
            <p className="py-4 text-red-700">forget password??</p>
            <input className="border btn btn-primary text-2xl" type="submit" value="submit" />
           </form>
           <p className='py-4 text-blue-900 text-xl'>New Here?? Please create an Account first  <Link className='font-bold text-black text-xl' to={'/register'}>Register Now</Link></p>
        </div>
       </div>
    );
};

export default Login;