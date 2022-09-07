import AddReminderCard from "../components/AddReminderCard";
import ReminderCard from "../components/ReminderCard";

export default function NotesPage() {
  return (
    <div className="w-full md:w-[900px] h-full overflow-y-scroll hidden-scrollbar ">
      <p className="text-5xl font-thin my-5 mx-10">Category</p>
      <div className=" grid grid-cols-2 md:grid-cols-5 gap-6 px-5">
        <ReminderCard />
        <ReminderCard />
        <ReminderCard />
        <ReminderCard />
        <ReminderCard />
        <ReminderCard />
        <ReminderCard />
        <ReminderCard />
        <ReminderCard />
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
  );
}
