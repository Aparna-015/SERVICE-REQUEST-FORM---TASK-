import { useState } from "react";
import "./App.css";
import ChildDetails from "./Components/ChildeDetails/ChildDetails";
import Contact from "./Components/Contact/Contact";
import Service from "./Components/ServiceNeeds/Service";
import {
  ChilddetailsSchema,
  serviceSchema,
  contactSchema,
} from "./Validation/Validation";

function App() {
  const [step, setStep] = useState(1);
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({
    age: "",
    diagnosis: "",
    schoolType: "",
    support: [],
    frequency: "",
    requirements: "",
    parentname: "",
    email: "",
    phone: "",
  });
  console.log(errors.age,"errorrr")

  const [formData, setFormdata] = useState({
    age: "",
    diagnosis: "",
    schoolType: "",
    support: [],
    frequency: "",
    requirements: "",
    parentname: "",
    email: "",
    phone: "",
  });

  console.log(formData, "age");

  const handleNext = async () => {
    let schema;
    if (step === 1) {
      schema = ChilddetailsSchema;
    } else if (step === 2) {
      schema = serviceSchema;
    }

    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      setStep((prev) => prev + 1);
    } catch (error) {
      const validationerror = {};
      error.inner.forEach((e) => {
        validationerror[e.path] = e.message;
      });
      setErrors(validationerror);
    }
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

  const handlesubmit = async () => {
    try {
      await contactSchema.validate(formData);
      setErrors({});
      console.log("submitted data successfully", formData);
      setSubmit(true);
    } catch (error) {
      const validationerror = {};
      error.inner.forEach((e) => {
        validationerror[e.path] = e.message;
      });
      setErrors(validationerror);
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
            errors={errors}
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
        {step === 3 && !submit && (
          <Contact
            onPrev={handlePrev}
            formdata={formData}
            handlechange={handleChange}
            handlesubmit={handlesubmit}
          />
        )}
        {submit && (
          <div className="my-8 text-center">
            <p>Thank you</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
