import * as Yup from "yup";

export const ChilddetailsSchema = Yup.object({
  age: Yup.number()
    .required("Age is required")
    .min(1, "age must be at least 1"),

  diagnosis: Yup.string().required("Diagnosis is required"),

  schoolType: Yup.string().required("  schoolType  is required"),
});


export const serviceSchema=Yup.object({
    support:Yup.array().min(1,"select support"),
    frequency: Yup.string().required("frequency is required"),
    requirements: Yup.string().required("requirements is required"),
})

export const contactSchema=Yup.object({

    parentname: Yup.string().required("parentname is required"),

    email: Yup.string()
    .required("Email ID is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email format"
    ),

    phone: Yup.string()
    .required("Phone Number is required")
    .matches(/^[6-9]\d{9}$/, "Invalid  phone number"),
})