import React from "react";

const Contact = ({ onPrev, formdata, handlechange, handlesubmit, errors }) => {
  return (
    <div className="contact-section  w-10/12 mx-auto p-6">
      <h1 className="text-3xl  text-center mb-6 font-bold">
        Contact Information
      </h1>
      <div className="space-y-2 mb-4">
        <h1> Parent's Name</h1>{" "}
        {errors.parentname && (
          <p className="text-red-500 text-xs ">{errors.parentname} </p>
        )}
        <input
          name="parentname"
          value={formdata.parentname}
          onChange={handlechange}
          className="w-full bg-slate-100 p-2"
          type="text"
        />
      </div>
      <div className="space-y-2 mb-4">
        <h1>Email</h1>{" "}
        {errors.email && (
          <p className="text-red-500 text-xs ">{errors.email} </p>
        )}
        <input
          name="email"
          value={formdata.email}
          onChange={handlechange}
          className="w-full bg-slate-100 p-2"
          type="email"
        />
      </div>
      <div className="space-y-2 mb-4">
        <h1>Phone Number</h1>{" "}
        {errors.phone && (
          <p className="text-red-500 text-xs ">{errors.phone} </p>
        )}
        <input
          name="phone"
          value={formdata.phone}
          onChange={handlechange}
          className="w-full bg-slate-100 p-2"
          type="tel"
        />
      </div>

      <div className="flex justify-between my-8 ">
        <button
          onClick={onPrev}
          className="bg-gray-500 text-white  px-8 py-2 rounded mt-4"
        >
          Prev
        </button>
        <button
          onClick={handlesubmit}
          className="bg-green-500 text-white px-8 py-2 rounded mt-4"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
