import React from "react";

const Service = ({ state }) => {
  return (
    <div className="service-container w-10/12 mx-auto p-5">
      <h1 className="text-2xl mb-5 text-center text-gray-800  ">
        Service Needs
      </h1>
      <div className=" mb-2 text-left ">
        <label className="block  mb-2  font-bold">
          Select Type of support needed
        </label>
        <div className="space-y-2 ">
          <label className=" flex item-center gap-2 ">
            <input type="checkbox" />
            Speach Therapy
          </label>
          <br />
          <label className=" flex item-center gap-2 ">
            <input type="checkbox" />
            Occupational Therapy
          </label>
          <br />
          <label className=" flex item-center gap-2 ">
            <input type="checkbox" />
            Speacial Education
          </label>
          <br />
        </div>
      </div>
      <div className="mb-2">
        <label className="font-bold">Prefered frequency</label>
        <br />
        <select className="w-full px-3 py-2 focus:ring-2 focus:ring-blue-100 border border-gray-200 rounded-lg">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="font-bold">Any specific requirement</label>
        <textarea className="w-full px-3 py-2 focus:ring-2 focus:ring-blue-100 border border-gray-200 rounded-lg">
        
        </textarea>
      </div>

      <div className="text-right ">
        <button onClick={state} className="bg-gray-500 text-white">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Service;
