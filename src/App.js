import { useState } from "react";
import "./App.css";
import ChildDetails from "./Components/ChildeDetails/ChildDetails";
import Contact from "./Components/Contact/Contact";
import Service from "./Components/ServiceNeeds/Service";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormdata] = useState({
    age: "",
    diagnosis: "",
    schoolType: "",
    support: [],
    frequency: "",
    requirements: "",
    parentName: "",
    email: "",
    phone: "",
  });

  console.log(formData, "age");

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "support") {
      setFormdata((prevformdata) => {
        const support = prevformdata.support || [];

        return {
          ...prevformdata,
          support: checked
            ? [...support, value]
            : support.filter((item) => item !== value),
        };
      });
    } else {
      setFormdata((prevformdata) => ({ ...prevformdata, [name]: value }));
    }
  };

  return (
    <div className="App bg-slate-200 h-screen flex items-center justify-center">
      <div className="w-5/12  bg-white h-[600px] rounded-lg ">
        <div className="w-full bg-blue-600 h-20 rounded">
          <h1 className="text-white text-center font-bold p-4 text-2xl ">
            Service Request Form
          </h1>
        </div>

        {step === 1 && (
          <ChildDetails
            onNext={handleNext}
            formdata={formData}
            handleChange={handleChange}
          />
        )}
        {step === 2 && (
          <Service
            onNext={handleNext}
            onPrev={handlePrev}
            formdata={formData}
            handlechange={handleChange}
          />
        )}
        {step === 3 && <Contact onPrev={handlePrev} />}
      </div>
    </div>
  );
}

export default App;
