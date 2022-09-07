import AddReminderCard from "../components/AddReminderCard";
import ReminderCard from "../components/ReminderCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IRootReducer } from "../../core/redux/rootReducer";

export default function HomePage() {
  const visible = useSelector((state: IRootReducer) => state.modal.reminderModal)
  return (
    <motion.div
      className=" h-full w-full md:w-[900px]"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
    >
      <div className="w-full h-full overflow-y-scroll hidden-scrollbar flex flex-col items-start">
        <p className="mx-10 mt-5 mb-2">Hi Username! Lorem ipsum dolor sit.{visible ? 'visible' : 'hide'}</p>
        <p className="text-5xl font-thin mb-5 mx-10">Today</p>
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-6 px-5">
          <ReminderCard />
          <ReminderCard />
          <ReminderCard />
          <ReminderCard />
          <ReminderCard />
          <ReminderCard />
          <AddReminderCard />
        </div>
        <div className=" w-full min-h-[1px] bg-[#b8bfc0] mt-16 mb-20"> </div>
        <p className="text-5xl font-thin mb-5 mx-10">Quick notes</p>
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-6 px-5">
          <ReminderCard />
          <ReminderCard />
          <ReminderCard />
          <ReminderCard />
          <ReminderCard />
          <ReminderCard />
          <AddReminderCard  />
        </div>
        <div className=" w-full min-h-[1px] bg-[#b8bfc0] mt-16 mb-20" />
        <p className="text-5xl font-thin my-5 mx-10">All</p>
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-6 px-5">
          <ReminderCard />
          <ReminderCard />
          <ReminderCard />
          <ReminderCard />
          <ReminderCard />
          <ReminderCard />
          <AddReminderCard />
        </div>
        <div className=" w-full py-16" />
      </div>
    </motion.div>
  );
}
