import React from "react";

const Service = ({ onNext, onPrev, formdata, handlechange }) => {
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
              <input
                type="checkbox"
                name="support"
                value="Speach Therapy"
                checked={formdata.support.includes("Speach Therapy")}
                onChange={handlechange}
              />
              Speach Therapy
            </label>
            <label className=" flex item-center gap-2 ">
              <input
                type="checkbox"
                name="support"
                value="Occupational Therapy"
                checked={formdata.support.includes("Occupational Therapy")}
                onChange={handlechange}
              />
              Occupational Therapy
            </label>
            <label className=" flex item-center gap-2 ">
              <input
                type="checkbox"
                name="support"
                value="Speacial Education"
                checked={formdata.support.includes("Speacial Education")}
                onChange={handlechange}
              />
              Speacial Education
            </label>
          </div>
        </div>
        <div className="mb-2 space-y-2">
          <label className="font-bold  text-gray-700 ">
            Prefered frequency
          </label>
          <select
            name="frequency"
            value={formdata.frequency}
            onChange={handlechange}
            className="w-full px-2 py-2 focus:ring-2 focus:ring-blue-100 border border-gray-200 rounded-lg"
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
        <div className="mb-2 space-y-2">
          <label className="font-bold  text-gray-700">
            Any specific requirement
          </label>
          <textarea
            name="requirements"
            value={formdata.requirements}
            onChange={handlechange}
            className="w-full px-3 py-2 focus:ring-2 focus:ring-blue-100 border border-gray-200 rounded-lg"
          ></textarea>
        </div>

        <div className="text-right flex justify-between ">
          <button
            onClick={onPrev}
            className="bg-gray-500 text-white px-3 rounded"
          >
            Prev
          </button>
          <button
            onClick={onNext}
            className="bg-blue-500 text-white px-3 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
