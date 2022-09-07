import { useNavigate } from "react-router-dom";
import TextField from "../components/TextField";
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import { useState } from "react";

const colors: string[] = [
  "#FF736B",
  "#FFBA45",
  "#FFE644",
  "#64FF77",
  "#45A4FF",
  "#D683FF",
  "#B4B4B8",
];

export default function NewCategoryPage() {
  const navigate = useNavigate();
  const initialValues: any = { email: "", theme: "" };
  const [tag, setTag] = useState<string>();

  const handleSubmit = (value: any) => {};

  return (
    <motion.div
      className=" h-full w-full md:w-[900px]"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
    >
      <div className="flex flex-row items-center my-4 space-x-10 px-5 md:px-0">
        <button onClick={() => navigate(-1)}>
          <img src="../../../back.png" alt="back" className="w-8 h-8" />
        </button>
        <p className=" text-3xl font-extralight">Create new category</p>
      </div>
      {/* <div className=" w-full h-[1px] bg-[#b8bfc0] mb-10" /> */}

      <div className="px-20 mt-10">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form className="flex flex-col items-center">
              <div className="overflow-hidden rounded-xl py-2 px-3 bg-light2 border border-[#b8bfc0] w-full">
                <TextField name="name" type="text" placeholder="Name" />
              </div>
              <div className=" mt-10 space-y-6 w-full ">
                <div className="flex flex-row items-center space-x-5">
                  <p className="mx-2">Tags</p>
                  <div className="flex-1 ">
                    <div
                      className="w-[150px] h-10 rounded-xl"
                      style={{ background: `${tag}` }}
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-7 px-5 h-10">
                  {colors.map((item: string) => {
                    return (
                      <div
                        className={` w-8 h-8 cursor-pointer rounded-full 
                      hover:w-10 hover:h-10 transition-all duration-200`}
                        style={{ background: `${item}` }}
                        onClick={() => setTag(item)}
                      />
                    );
                  })}
                </div>
              </div>
              <div className=" w-full flex items-center justify-center mt-40">
                <button className="px-16 py-4 rounded-xl bg-link text-light">
                  Create
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
}
