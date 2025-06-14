import React from "react";

const ChildDetails = ({ onNext, formdata, handleChange, errors }) => {
  return (
    <div className="main-container w-10/12 mx-auto  font-bold p-2 ">
      <div className="W-full  space-y-5  ">
        <h2 className=" text-3xl text-center mb-4 font-bold">Child Details</h2>
        <div className=" text-left flex flex-col">
            
          <label className="font-semibold py-1  text-gray-700">Child Age</label>
           {errors.age && <p className="text-red-500 text-xs ">{errors.age} </p>}
          <input
            className="bg-slate-100 p-2"
            type="number"
            name="age"
            value={formdata.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
       

        </div>
        <div className=" text-left flex flex-col">
          <label className="font-semibold py-2  text-gray-700">Diagnosis</label>
            {errors.diagnosis && (
            <p className="text-red-500 text-xs ">{errors.diagnosis} </p>)}
          <input
            className=" bg-gray-100 p-2"
            type="text"
            name="diagnosis"
            value={formdata.diagnosis}
            onChange={handleChange}
            placeholder="eg: ADHD"
          />
        
          
        </div>
        <div className="py-2 space-y-2 ">
          <label className=" flex item-center gap-2 ">
            Current School Type
          </label>
   {errors.schoolType && <p className="text-red-500 text-xs ">{errors.schoolType} </p>}
          <label className="font-normal flex item-center gap-2 ">
            <input
              type="radio"
              name="schoolType"
              value="Private"
              checked={formdata.schoolType === "Private"}
              onChange={handleChange}
            />
            Private
          </label>

          <label className="font-normal flex item-center gap-2 ">
            <input
              type="radio"
              name="schoolType"
              value="Public"
              checked={formdata.schoolType === "Public"}
              onChange={handleChange}
            />
            Public
          </label>

          <label className="font-normal flex item-center gap-2 ">
            <input
              type="radio"
              name="schoolType"
              value="SpeacialSchool"
              checked={formdata.schoolType === "SpeacialSchool"}
              onChange={handleChange}
            />
            Speacial
          </label>
        </div>

        <div className="text-right  mb-3">
          <button
            className="bg-gray-500  py-1 px-3 rounded text-sm text-white"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildDetails;
