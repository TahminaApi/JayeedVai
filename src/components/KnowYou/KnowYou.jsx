import React from 'react';
import LinkImg from '../../assets/img/blueArrow.png';

const KnowYou = () => {
  return (
    <div className="bg-gray-200  min-h-screen flex justify-center  pt-40 gap-3 ">
      {/* ----------------First section: Text------------- */}
      <div className="w-1/3 pt-20">
        <div className="flex flex-row gap-0 pb-3">
          <img className="w-10" src={LinkImg} alt="Link-Img" />
          <h3 className="text-2xl font-bold ">Link3rs</h3>
        </div>
        <h1 className="text-4xl font-bold">First time at the backstage?</h1>
        <h1 className="text-4xl font-bold pt-10">- Welcome.</h1>
      </div>

      {/* -----------Second section : form -------------- */}
      <div>
        <div className=" flex  p-2">
          <div className="bg-white p-8 rounded-3xl ">
            <h2 className="text-3xl font-bold text-start mb-6">
              To get to know you
            </h2>

            <form>
              {/* -------Name & Surname field------- */}
              <div className="flex flex-row gap-4 ">
                {/* Name */}
                <div className="mb-4 w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
                {/* Surname */}
                <div className="mb-4 w-full">
                  <label
                    htmlFor="surname"
                    className="block text-sm font-medium text-black"
                  >
                    Surname <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    required
                    className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
              </div>

              {/* ----Email & Company Link field----- */}
              <div className="flex flex-row gap-4 ">
                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
                {/* Company Link */}
                <div className="mb-6">
                  <label
                    htmlFor="companyLink"
                    className="block text-sm font-medium text-black"
                  >
                    Company Link <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="companyLink"
                    name="companyLink"
                    placeholder="If none, leave blank."
                    className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
              </div>

              {/* ----------Phone number & Password field-------- */}
              <div className="flex flex-row gap-4">
                {/* Phone Number */}
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
                {/* Phone Number */}
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black"
                  >
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Continue Button */}
        <button
          type="submit"
          className=" bg-blue-500 text-white p-3 rounded-2xl hover:bg-blue-600 transition duration-300 z-10"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default KnowYou;
