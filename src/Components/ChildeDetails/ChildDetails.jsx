import React from "react";

const ChildDetails = () => {
  return (
    <div className="main-container  text-left font-bold p-8">
      <h2 className=" text-xl">Child Details</h2>
      <div className=" text-left flex flex-col p-4">
        <label className="font-normal">Child Age</label>
        <input className="bg-slate-200" type="number" placeholder="Enter age" />
      </div>
      <div className=" text-left flex flex-col p-4">
        <label className="font-normal">Diagnosis</label>
        <input className="bg-slate-200" type="number" placeholder="eg: ADHD" />
      </div>
      <div className="P-4">
        <label className="font-normal">Current school type</label>
        <br />
        <input type="radio" name="school type" value="Private" />
        <label className="font-normal">Private</label> <br />
        <input type="radio" name="school type" value="Public" />
        <label className="font-normal">Public</label> <br />
        <input type="radio" name="school type" value="SpeacialSchool" />
        <label className="font-normal">Speacial</label>
      </div>

      <div className="text-right">
        <button className="bg-gray-500 text-white">NEXT</button>
      </div>
    </div>
  );
};

export default ChildDetails;
