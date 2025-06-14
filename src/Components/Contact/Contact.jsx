import React from "react";

const Contact = () => {
  return (
    <div className="contact-section  w-10/12 mx-auto p-6">
      <h1 className="text-center mb-4 text-xl">Contact Information</h1>
      <div className="space-y-2 mb-4">
        <h1> Parent's Name</h1>
        <input className="w-full bg-slate-100" type="" />
      </div>
      <div className="space-y-2 mb-4">
        <h1>Email</h1>
        <input className="w-full bg-slate-100" type="" />
      </div>
      <div className="space-y-2 mb-4">
        <h1>Phone Number</h1>
        <input className="w-full bg-slate-100" type="" />
      </div>

      <div className="text-center my-8 ">
        <button className="bg-green-500 text-white px-8 py-2 rounded">
          submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
