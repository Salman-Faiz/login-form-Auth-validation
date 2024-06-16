import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
    
      <div className="container mx-auto">
          <div className="border mt-40 bg-blue-200 rounded-lg text-center">
              <h3 className="pt-8  text-3xl font-semibold">Please Register</h3>
           <form  className="py-10 space-y-5">
           <input className="border text-2xl px-4 py-2 rounded-md" type="text" name='name' placeholder='Name' /><br />
            <input className="border text-2xl px-4 py-2 rounded-md" type="email" name="email" id="" placeholder="Email" /> <br />
            <input className="border text-2xl px-4 py-2 rounded-md" type="password" name="password" id="" placeholder="password" /> <br />
            <input className="border btn btn-primary text-2xl" type="submit" value="submit" />
           </form>
           <p className='py-4 text-red-600'>Already have an account?? Please go to <Link className='font-bold text-black text-xl' to={'/login'}>Login</Link></p>
        </div>

      </div>
    );
};

export default Register;