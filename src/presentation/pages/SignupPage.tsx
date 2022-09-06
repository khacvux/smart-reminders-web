import { ISignup } from "../../core/redux/auth/interfaces";
import { Form, Formik } from "formik";
import TextField from "../components/TextField";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const initialValues: ISignup = { email: "", password: "", username: "" };
  const handleSubmit = (value: ISignup) => {};
  return (
    <motion.div
      className=" w-screen h-full flex items-center justify-center"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "100%", opacity: 1 }}
      exit={{ height: "200%", opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className=" w-full md:w-[900px] h-3/4 flex flex-col items-center overflow-visible">
        <p className=" my-7 text-4xl ">Create Your Account</p>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form className="flex flex-col items-center">
              <div className=" w-full md:w-[400px] flex flex-col space-y-4 items-center">
                <div className="overflow-hidden rounded-xl px-3 py-2 bg-light2 border border-[#b8bfc0] w-full">
                  <TextField
                    name="username"
                    type="email"
                    placeholder="Create your user name"
                  />
                </div>
                <div className="overflow-hidden rounded-xl px-3 py-2 bg-light2 border border-[#b8bfc0] w-full">
                  <TextField
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="overflow-hidden rounded-xl px-3 py-2 bg-light2 border border-[#b8bfc0] w-full">
                  <TextField
                    name="password"
                    type="password"
                    placeholder="Create your password"
                  />
                </div>
                <div className="overflow-hidden rounded-xl px-3 py-2 bg-light2 border border-[#b8bfc0] w-full">
                  <TextField
                    name="password"
                    type="password"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
              <button className=" bg-link w-56 text-light2 p-3 rounded-xl mt-8">
                Continue
              </button>
            </Form>
          )}
        </Formik>
        <div className=" w-[320px] h-[1px] bg-[#b8bfc0] mb-16 mt-8" />
        <div className="text-2x mb-4">
          Have an Account?{" "}
          <Link to="/sign-in" className="text-link">
            Sign in
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
