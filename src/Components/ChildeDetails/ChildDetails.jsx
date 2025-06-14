import React from "react";


const ChildDetails = ({onNext}) => {
  return (
    <div className="main-container w-8/12 mx-auto  font-bold p-8 ">
      <div className="W-full  space-y-5 p-2 ">
        <h2 className=" text-3xl text-center mb-6 font-semibold">
          Child Details
        </h2>
        <div className=" text-left flex flex-col">
          <label className="font-semibold py-2  text-gray-700">Child Age</label>
          <input
            className="bg-slate-100 py-2"
            type="number"
            placeholder="Enter age"
          />
        </div>
        <div className=" text-left flex flex-col">
          <label className="font-semibold py-2  text-gray-700">Diagnosis</label>
          <input className=" bg-gray-100 py-2" type="text" placeholder="eg: ADHD" />
        </div>
        <div className="py-2 space-y-2 ">
          <label className=" flex item-center gap-2 ">
            Current School Type
          </label>

          <label className="font-normal flex item-center gap-2 ">
            <input type="radio" name="school type" value="Private" />
            Private
          </label>

          <label className="font-normal flex item-center gap-2 ">
            <input type="radio" name="school type" value="Public" />
            Public
          </label>

          <label className="font-normal flex item-center gap-2 ">
            <input type="radio" name="school type" value="SpeacialSchool" />
            Speacial
          </label>
        </div>

        <div className="text-center mt-3 ">
          <button className="bg-gray-500 w-full rounded text-sm text-white" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildDetails;
