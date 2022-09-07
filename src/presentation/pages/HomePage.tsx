import AddReminderCard from "../components/AddReminderCard";
import ReminderCard from "../components/ReminderCard";

export default function HomePage() {
  return (
    <div className="w-full md:w-[900px] h-full overscroll-y-scroll">
        <p className="text-5xl font-thin my-5 mx-5">Today</p>
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-6 px-5">
            <ReminderCard />
            <ReminderCard />
            <ReminderCard />
            <ReminderCard />
            <ReminderCard />
            <ReminderCard />
            <AddReminderCard />
        </div>
      <div className=" w-full h-[1px] bg-[#b8bfc0] mt-16 mb-20" />

    </div>
  )
}
