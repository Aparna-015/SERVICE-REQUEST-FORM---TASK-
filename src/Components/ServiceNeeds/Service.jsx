import React from "react";

const Service = () => {
  return (
    <div className="service-container w-8/12 mx-auto p-4">
      <div className="w-full p-4">
        <h1 className="text-3xl mb-5 text-center text-gray-800 p-2  ">
          Service Needs
        </h1>
        <div className=" ">
          <label className="block  mb-2  font-bold text-gray-700">
            Select Type of support needed
          </label>
          <div className="space-y-2 mb-4 p-2 ">
            <label className=" flex item-center gap-2 ">
              <input type="checkbox" />
              Speach Therapy
            </label>
            <label className=" flex item-center gap-2 ">
              <input type="checkbox" />
              Occupational Therapy
            </label>
            <label className=" flex item-center gap-2 ">
              <input type="checkbox" />
              Speacial Education
            </label>
          </div>
        </div>
        <div className="mb-2 space-y-2">
          <label className="font-bold  text-gray-700 ">
            Prefered frequency
          </label>
          <select className="w-full px-2 py-2 focus:ring-2 focus:ring-blue-100 border border-gray-200 rounded-lg">
            <option >Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
        <div className="mb-2 space-y-2">
          <label className="font-bold  text-gray-700">
            Any specific requirement
          </label>
          <textarea className="w-full px-3 py-2 focus:ring-2 focus:ring-blue-100 border border-gray-200 rounded-lg"></textarea>
        </div>

        <div className="text-right flex justify-between ">
          <button className="bg-gray-500 text-white px-3 rounded">Prev</button>
          <button className="bg-blue-500 text-white px-3 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
