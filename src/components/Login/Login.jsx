import React from 'react';
import LinkImg from '../../assets/img/blueArrow.png';
import loginImg from '../../assets/img/loginPhon.jpeg';
import GoogleImg from "../../assets/img/googleImg.png"
import AppleImg from "../../assets/img/AppleImg (1).png"

const Login = () => {
  return (
    <div className="flex flex-col items-center p-12 pb-20  bg-gray-200  min-h-screen">

      {/* ------------Title--------------- */}
      <div className="flex flex-row gap-0">
        <img className="w-9" src={LinkImg} alt="Link-Img" />
        <h3 className="text-2xl font-bold">Link3rs</h3>
      </div>
      <h1 className="text-6xl font-bold pb-8">Backstage</h1>
      {/* -------------------Login form--------------------- */}
      <div
        className="bg-cover bg-center flex justify-center items-center rounded-3xl  "
        style={{
          backgroundImage: `url(${loginImg})`,
          width: 400,
          height: 550,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="rounded ">
          <h2 className="text-2xl font-bold text-center p-3 ">Login</h2>

          <form action="#" method="POST">
            {/* Email Field */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address "
                required
                className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
              />
            </div>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t  border-black" />
              <span className="mx-4 font-bold border-black">or</span>
              <hr className="flex-grow border-t border-black" />
            </div>

            {/* Google button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full flex  bg-slate-300   text-slate-600 py-2 px-2 rounded-lg hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <img className='h-7 w-7 ' src={GoogleImg} alt="GoogleLogo" />
               <h1 className='text-slate-700 font-medium'> Continue with Google</h1>
              </button>
            </div>

            {/* Apple Button */}
            <div>
              <button
                type="submit"
               className="w-full flex bg-black text-white py-2 px-2 rounded-lg hover:bg-slate-400 focus:outline-none focus:ring-2  focus:ring-slate-900"
              >
                <img className='h-7 w-7 ' src={AppleImg} alt="AppleLogo" />
                Continue with Apple
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* --------------Last---------------- */}
      <div className='flex
      flex-row gap-32 pt-3 font-bold text-2xl'>
        <h1>or Sign Up</h1>
        <h1>- Enterprise</h1>
      </div>
    </div>
  );
};

export default Login;
