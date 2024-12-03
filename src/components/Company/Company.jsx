import React from 'react';
import LinkImg from '../../assets/img/blueArrow.png';

const Company = () => {
  return (
    <div className="bg-gray-200  min-h-screen flex justify-center  pt-40 gap-3 ">
      {/* ----------------First section: Text------------- */}
      <div className="w-1/3 pt-10">
        <div className="flex flex-row gap-0 pb-3">
          <img className="w-10" src={LinkImg} alt="Link-Img" />
          <h3 className="text-2xl font-bold ">Link3rs</h3>
        </div>
        <h1 className="text-4xl font-bold">First time at the backstage?</h1>
        <h1 className="text-4xl font-bold pt-10">- Welcome.</h1>
        <h2 className='text-2xl font-medium'>Enterprise Section</h2>
        <h2 className='text-2xl font-medium pt-24'>We want to know more about you.
        Let’s schedule a meeting!!</h2>
      </div>

      {/* -----------Second section : form -------------- */}
      <div>
        <div className=" flex  p-2">
          <div className="bg-white p-8 rounded-3xl ">
            <h2 className="text-3xl font-bold text-start mb-6">
            To get to know your company.
            </h2>

            <form>
              {/* -------Business Name & CEO ------- */}
              <div className="flex flex-row gap-4 ">
                {/* Bussiness */}
                <div className="mb-4">
                  <label
                    htmlFor="business-name"
                    className="block text-sm font-medium text-black"
                  >
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="business-name"
                    name="business-name"
                    required
                    className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
                {/* CEO */}
                <div className="mb-4 w-full">
                  <label
                    htmlFor="ceo"
                    className="block text-sm font-medium text-black"
                  >
                  Business Owner / CEO / Head of Buying<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="ceo"
                    name="ceo"
                    required
                    className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
              </div>

              {/* ----Contact Number & Company Email----- */}
              <div className="flex flex-row gap-4 ">
                {/* Contact Number */}
                <div className="mb-4">
                  <label
                    htmlFor="contact-number"
                    className="block text-sm font-medium text-black"
                  >
                   Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="contact-number"
                    name="contact-number"
                    required
                    className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
                {/* Company Email */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black"
                  >
                    Company Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
              </div>

              {/* ----------country & Address -------- */}
              <div className="flex flex-row gap-4">
                {/* country*/}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black"
                  >
                   Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    required
                    className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
                {/* Address */}
                <div className="mb-4 w-full">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-black"
                  >
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
              </div>

              {/* ----------Type of business & Message-------- */}
              <div className="flex flex-row gap-4">
                {/* Type of bussiness */}
                <div className="mb-4">
                  <label
                    htmlFor="BusinessType"
                    className="block text-sm font-medium text-black"
                  >
                 Type of Business <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="BusinessType"
                    name="BusinessType"
                    required
                    className="w-full font-medium  mt-2 px-4 py-2 bg-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
                {/* Message */}
                <div className="mb-4">
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-black"
                  >
                   Message <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="message"
                    name="message"
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

export default Company;
