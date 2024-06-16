import { Link } from "react-router-dom";

const Login = () => {
    return (
       <div className="container mx-auto">
         <div className="border mt-40 bg-green-200 rounded-lg text-center">
            <h3 className="pt-8  text-3xl font-semibold">Please login</h3>
           <form  className="py-10">
           
            <input className="border text-2xl px-4 py-2 rounded-md mb-5" type="email" name="email" id="" placeholder="Email" /> <br />
            <input className="border text-2xl px-4 py-2 rounded-md" type="password" name="password" id="" placeholder="password" /> <br />
            <p className="">forget password??</p>
            <input className="border btn btn-primary text-2xl" type="submit" value="submit" />
           </form>
           <p className='py-4 text-red-600'>New Here?? Please create an Account first  <Link className='font-bold text-black text-xl' to={'/register'}>Register Now</Link></p>
        </div>
       </div>
    );
};

export default Login;