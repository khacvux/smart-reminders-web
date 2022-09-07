import React from "react";

export default function ReminderCard() {
  return (
    <div
      className="bg-light2 w-full min-h-[210px] cursor-pointer rounded-2xl
     flex flex-col items-center justify-between"
    >
      <div className="flex-1 flex items-center justify-center">
        <p className="text-6xl font-thin">12:30</p>
      </div>
      <div className=" w-full h-[100px] px-4 py-6">
        <p className=" font-medium">Reminder</p>
        <p className="text-justify text-xl">Lorem ipsum dolor sit amet adipisicing elit. Quasi sapiente ex!</p>
      </div>
    </div>
  );
}
