import { useState } from "react";
import "./App.css";
import ChildDetails from "./Components/ChildeDetails/ChildDetails";
import Contact from "./Components/Contact/Contact";
import Service from "./Components/ServiceNeeds/Service";

function App() {
  const [step, setStep] = useState(1);
 

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="App bg-slate-200 h-screen flex items-center justify-center">
      <div className="w-5/12  bg-white h-[600px] rounded-lg ">
        <div className="w-full bg-blue-600 h-20 rounded">
          <h1 className="text-white text-left font-bold p-4 text-2xl ">
            Service Request Form
          </h1>
        </div>

        {step === 1 && (<ChildDetails onNext={handleNext} />)}
        {step === 2 && (<Service onNext={handleNext} onPrev={handlePrev} />)}
        {step === 3 && (<Contact onPrev={handlePrev} />)}
      </div>
    </div>
  );
}

export default App;
