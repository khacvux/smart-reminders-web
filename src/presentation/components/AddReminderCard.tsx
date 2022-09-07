import { useDispatch } from "react-redux";
import { openAddReminderCard } from "../../core/redux/modal/actions";


export default function AddReminderCard() {
  const dispatch = useDispatch()
  return (
    <button
      className="bg-light2 w-full min-h-[210px] cursor-pointer rounded-2xl
   flex flex-col items-center justify-center"
   onClick={() => dispatch(openAddReminderCard())}
    >
      <img src="../../plus.png" alt="" className="w-10 h-10" />
    </button>
  );
}
