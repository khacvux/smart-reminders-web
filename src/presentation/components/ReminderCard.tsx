import React from "react";
import { useDispatch } from "react-redux";
import { openReminderModal } from "../../core/redux/modal/actions";

export default function ReminderCard() {
  const dispatch = useDispatch();
  return (
    <button
      className="bg-light2 w-full min-h-[210px] cursor-pointer rounded-2xl
        flex flex-col items-center justify-between overflow-hidden py-2 "
      onClick={() => dispatch(openReminderModal())}
    >
      <div className="flex-1 flex flex-col items-center justify-center ">
        <p className="text-6xl font-thin mt-5">12:30</p>
        <p className="text-lg">12/12/2222</p>
      </div>
      <div className=" w-full h-[100px] py-6 px-4">
        <div className=" border-2 border-[#FFE644] rounded-xl px-3 mb-2">
          <p className=" font-medium">Reminder</p>
        </div>
        <p className="text-justify text-xl">
          Lorem ipsum dolor sit amet adipisicing elit. Quasi sapiente ex!
        </p>
      </div>
    </button>
  );
}
