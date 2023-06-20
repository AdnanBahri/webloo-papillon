"use client";
import { Form, Formik } from "formik";

const Schedule = () => {
  return (
    <div className="relative w-full p-16">
      <div className="absolute -z-10 gradient-03" />
      <div className="absolute -z-10 gradient-04" />
      <div className="absolute -z-10 gradient-05" />
      <div className="z-0 inset-0">
        <h1 className="text-7xl ">Schedule a meeting</h1>
        <h1 className="text-7xl ">for a discovery session</h1>
        <p className="mt-10">
          Schedule a <span className="font-bold">meeting right now.</span>
        </p>
        <div className="grid grid-cols-3 gap-6 max-w-[900px] font-medium text-sm mt-4">
          <input
            type="text"
            name="name"
            className="w-full px-6 py-3 border-white border-[2px] rounded-full bg-transparent focus:ring-0 outline-none placeholder-gray-200"
            placeholder="Full Name"
          />
          <input
            type="text"
            name="company"
            className="w-full px-6 py-3 border-white border-[2px] rounded-full bg-transparent focus:ring-0 outline-none placeholder-gray-200"
            placeholder="Company Name"
          />
          <input
            type="email"
            name="email"
            className="w-full px-6 py-3 border-white border-[2px] rounded-full bg-transparent focus:ring-0 outline-none placeholder-gray-200"
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
          <input
            type="text"
            name="phone"
            className="w-full px-6 py-3 border-white border-[2px] rounded-full bg-transparent focus:ring-0 outline-none placeholder-gray-200"
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
            <button className="px-5 py-2  rounded-full">Data Science</button>
          </div>
        </div>
        {/* <Formik>
            {({
                isValid,
                isSubmitting,
                handleBlur,
                handleChange,
                handleSubmit,
                touched,
                errors
            })=>{
                <Form>

                </Form>
            }}
        </Formik> */}
      </div>
    </div>
  );
};

export default Schedule;
