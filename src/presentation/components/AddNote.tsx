import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAddReminderCard } from "../../core/redux/modal/actions";
import { IRootReducer } from "../../core/redux/rootReducer";
import CategoryCard from "./CategoryCard";
import SelectCategoryCard from "./SelectCategoryCard";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";

export default function AddNote() {
  const visible = useSelector(
    (state: IRootReducer) => state.modal.addReminderCardVisible
  );
  const [necessity, setNecessity] = useState<number>(-1);
  const dispatch = useDispatch();
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <>
      {!visible ? (
        <></>
      ) : (
        <motion.div
          className=" h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div
            className="absolute top-0 bottom-0 left-0 right-0 z-[1000] 
              backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden"
            onClick={() => dispatch(closeAddReminderCard())}
          >
            <div
              className=" w-full md:w-[900px] h-3/4 bg-light rounded-2xl border border-[#ced6d7]
              flex flex-col items-center
            "
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="flex fles-row items-center justify-between w-full px-9 py-7">
                <p className=" text-4xl">New Reminder</p>
                <button onClick={() => dispatch(closeAddReminderCard())}>
                  <img
                    src="../../close.png"
                    alt="close"
                    className=" w-10 h-10"
                  />
                </button>
              </div>
              <div className=" w-5/6 h-[1px] bg-[#d1dddf] mb-4" />
              <div className="h-full w-full flec flex-col overscroll-y-scroll">
                <div className="rounded-2xl overflow-hidden w-full py-1">
                  <div className="flex flex-row items-center space-x-4 overflow-x-scroll hidden-scrollbar rounded-lg">
                    <button
                      className=" min-w-[150px]  py-4 px-2 rounded-xl 
                        space-x-3 bg-[#64FF77] border-1 border-[#64FF77] ml-10"
                    >
                      <p>Quick note</p>
                    </button>
                    <SelectCategoryCard />
                    <SelectCategoryCard />
                    <SelectCategoryCard />
                    <SelectCategoryCard />
                    <SelectCategoryCard />
                    <SelectCategoryCard />
                    <SelectCategoryCard />
                  </div>
                </div>
                <div className="w-full mt-4 px-5">
                  <div className="w-full ">
                    <textarea
                      placeholder="Note"
                      className="bg-light outline-none p-5 border border-x-1 rounded-2xl
                 border-[#BCC0C2] font-light resize-none h-[150px] w-full my-5"
                      name="message"
                    />
                  </div>
                  <div className=" w-5/6 h-[1px] bg-[#d1dddf] mb-8 mx-auto" />
                  <div className="flex flex-row items-start space-x-10 px-10">
                    <div className=" w-1/3 flex flex-col items-end">
                      <div className=" h-20 flex items-center">
                        <p>Date and Time</p>
                      </div>
                      <div className=" h-20 flex items-center  ">
                        <p>Necessity</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="h-20">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </LocalizationProvider>
                      </div>
                      <ul className="flex flex-row items-center space-x-5 h-20">
                        <button
                          className={` w-8 h-8 cursor-pointer rounded-full bg-[#64FF77] flex items-center justify-center`}
                        >
                          <div className=" active-radio " />
                        </button>
                        <button
                          className={` w-8 h-8 cursor-pointer rounded-full bg-[#FFBA45] `}
                        />
                        <button
                          className={` w-8 h-8 cursor-pointer rounded-full bg-[#FF736B] `}
                        />
                      </ul>
                      <button className="bg-link px-16 py-4 my-10 rounded-lg text-light">
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
