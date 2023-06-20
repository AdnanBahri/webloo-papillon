"use client";
import { Input } from "@/components";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
};

export const contactSchema = Yup.object().shape({
  name: Yup.string("Enter Your Name")
    .min(3, "Too Short")
    .required("The Name is Required"),
  company: Yup.string("Company Name").required("The Company Name is Required"),
  email: Yup.string()
    .email("Email Address isn't Valid")
    .required("The User Email is Required"),
  phone: Yup.string("Enter The Phone Number")
    .min(10)
    .required("The Phone Number is Required"),
});

const Schedule = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <div className="relative w-full p-16">
      <div className="absolute -z-10 gradient-03" />
      <div className="absolute -z-10 gradient-04" />
      <div className="absolute -z-10 gradient-05" />
      <div className="z-0 w-full max-w-7xl mx-auto sm:px-16 px-6">
        <h1 className="text-7xl ">Schedule a meeting</h1>
        <h1 className="text-7xl ">for a discovery session</h1>
        <p className="mt-10">
          Schedule a <span className="font-bold">meeting right now.</span>
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
          className="w-full"
        >
          {({
            isValid,
            isSubmitting,
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            touched,
            resetForm,
            errors,
          }) => (
            <Form>
              <div className="grid grid-cols-3 gap-6 max-w-[900px] font-medium text-sm mt-4">
                <Input
                  type="text"
                  name="name"
                  onBlur={handleBlur}
                  setValue={handleChange}
                  error={errors.name}
                  touched={touched.name}
                  value={values.name}
                  placeholder="Full Name"
                />
                <Input
                  type="text"
                  name="company"
                  onBlur={handleBlur}
                  setValue={handleChange}
                  error={errors.company}
                  touched={touched.company}
                  value={values.company}
                  placeholder="Company Name"
                />
                <Input
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  setValue={handleChange}
                  error={errors.email}
                  touched={touched.email}
                  value={values.email}
                  placeholder="Email Address"
                />
                <div className="col-span-2 py-.5 border-white border-2 rounded-full bg-transparent flex items-center justify-between">
                  <button className="px-5 py-2 bg-blue-600 rounded-full">
                    Advisory
                  </button>
                  <button className="px-5 py-2  rounded-full">Academy</button>
                  <button className="px-5 py-2 rounded-full">Agency</button>
                  <button className="px-5 py-2  rounded-full">Alliance</button>
                </div>
                <Input
                  type="text"
                  name="phone"
                  onBlur={handleBlur}
                  setValue={handleChange}
                  error={errors.phone}
                  touched={touched.phone}
                  value={values.phone}
                  placeholder="Phone Number"
                />
                <div className="col-span-3 py-.5 border-white border-2 rounded-full bg-transparent flex items-center justify-between">
                  <button className="px-5 py-2 rounded-full">Strategy</button>
                  <button className="px-5 py-2  rounded-full">Marketing</button>
                  <button className="px-5 py-2 rounded-full">
                    Digital Transformation
                  </button>
                  <button className="px-5 py-2 bg-blue-600 rounded-full">
                    Business Process
                  </button>
                  <button className="px-5 py-2  rounded-full">
                    System Integration
                  </button>
                  <button className="px-5 py-2  rounded-full">
                    Data Science
                  </button>
                </div>
                <div className="w-full col-span-4">
                  <button
                    className="py-1.5 px-5 text-sm font-semibold inline-flex space-x-3 items-center justify-between bg-blue-600 rounded-full max-w-[300px]"
                    type="button"
                    onClick={handleSubmit}
                  >
                    <p className="">SCHEDULE A MEETING</p>
                    <div className="rounded-full bg-black h-5 w-5 p-4 inline-flex items-center justify-center">
                      2/2
                    </div>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Schedule;
