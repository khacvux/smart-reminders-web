import { ISignin } from "../../core/redux/auth/interfaces";
import TextField from "../components/TextField";
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SigninPage() {
  const initialValues: ISignin = { email: "", password: "" };
  const handleSubmit = (value: ISignin) => {};
  return (
    <motion.div
      className=" w-screen h-full flex items-center justify-center"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "100%", opacity: 1 }}
      exit={{ height: "200%", opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className=" w-full md:w-[900px] h-3/4 flex flex-col items-center overflow-visible">
        <p className=" my-7 text-4xl w-[370px] ">Sign in for reminders</p>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <div
                className=" w-full md:w-[400px] h-[100px] flex flex-row items-center 
              rounded-xl overflow-hidden bg-light2 p-3 border border-[#b8bfc0] space-x-4"
              >
                <div className="flex-1 flex flex-col items-center">
                  <TextField name="email" type="email" placeholder="Email" />
                  <div className=" w-full h-[1px] bg-[#b8bfc0] " />
                  <TextField
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  className=" w-24 flex items-center justify-center cursor-pointer h-full "
                  type="submit"
                >
                  <img
                    src="../../../public/arrow-right.png"
                    className=" w-12 h-12"
                  />
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className=" w-[320px] h-[1px] bg-[#b8bfc0] my-16" />
        <a href="#" className=" text-2xl text-link ">
          Forgot Email or Password?
        </a>
        <div className="text-2x my-4">
          Don't have an Account?{" "}
          <Link to="/sign-up" className="text-link">
            Create yours now.
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
