"use client";
import { Input } from "@/components";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

export const contactSchema = Yup.object().shape({
  name: Yup.string("Enter Your Name")
    .min(3, "Too Short")
    .required("The Name is Required"),
  email: Yup.string()
    .email("Email Address isn't Valid")
    .required("The User Email is Required"),
  phone: Yup.string("Enter The Phone Number")
    .min(10)
    .required("The Phone Number is Required"),
});

const Contact = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div
      className={
        "w-full max-w-7xl mx-auto flex items-center justify-center sm:px-16 px-6 min-h-[calc(100vh_-_120px)]"
      }
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
        className="w-full max-w-md px-4 py-2 pb-6 bg-slate-900 rounded-md shadow-md flex flex-col"
      >
        <div className="text-lg font-bold text-slate-600 self-center mt-2 mb-8">
          Register Form
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
        >
          {({
            isValid,
            isSubmitting,
            handleBlur,
            handleChange,
            errors,
            values,
            touched,
            handleSubmit,
          }) => (
            <Form className="w-full flex flex-col space-y-5">
              <Input
                name={"name"}
                type={"name"}
                error={errors.name}
                label={"Client Name"}
                onBlur={handleBlur}
                placeholder={"Enter your name "}
                setValue={handleChange}
                value={values.name}
                touched={touched.name}
              />
              <Input
                name={"email"}
                type={"email"}
                error={errors.email}
                label={"Email Address"}
                onBlur={handleBlur}
                placeholder={"Enter your Email address"}
                setValue={handleChange}
                value={values.email}
                touched={touched.email}
              />
              <Input
                name={"phone"}
                type={"phone"}
                error={errors.phone}
                label={"Phone Number"}
                onBlur={handleBlur}
                placeholder={"Enter your phone number"}
                setValue={handleChange}
                value={values.phone}
                touched={touched.phone}
              />
              <button
                type="submit"
                className="w-full py-2 rounded-md bg-slate-700 hover:bg-slate-800"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
};

export default Contact;
