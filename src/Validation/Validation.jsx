import * as Yup from "yup";

export const ChilddetailsSchema = Yup.object({
  age: Yup.number()
    .typeError("Age must be a number")
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? undefined : Number(originalValue)
    )
    .required("Age is required")
    .min(1, "Age must be at least 1")
    .max(18, "Age must be 18 or younger"),
  diagnosis: Yup.string().required("Diagnosis is required"),

  schoolType: Yup.string().required("  schoolType  is required"),
});

export const serviceSchema = Yup.object({
  support: Yup.array().min(1, "select support"),
  frequency: Yup.string().required("frequency is required"),
  requirements: Yup.string().required("requirements is required"),
});

export const contactSchema = Yup.object({
  parentname: Yup.string().required("parentname is required")
    .matches(/^[a-zA-Z\s]+$/, "Name required"),


email: Yup.string()
    .required("Email ID is required")
    .test("valid-email", "Invalid email format", (value) => {
      if (!value) return true; 
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    }),

  phone: Yup.string()
    .required("Phone Number is required")
    .test("valid-phone", "Invalid phone number", (value) => {
      if (!value) return true;
      return /^[6-9]\d{9}$/.test(value);
    }),
});
