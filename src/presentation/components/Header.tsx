import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import "../../../public/plus.png";
import { useDispatch } from "react-redux";
import { openAddReminderCard } from "../../core/redux/modal/actions";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <div className=" w-screen min-h-[120px] overflow-hidden flex flex-col items-center justify-around ">
      <div className=" w-full md:w-[1200px] h-[100px] py-2 px-4 flex flex-row items-center overflow-y-scroll space-x-7 ">
        <Link
          className="rounded-2xl h-full min-w-[160px] bg-[#FF736B] cursor-pointer 
        flex items-start justify-center px-5 flex-col"
          to="/"
        >
          <img src="../../../ihome.png" alt="" className="w-10 h-11 mb-5 m-2" />
          <p className=" text-3xl font-extralight ">Home</p>
        </Link>
        <Link
          className="rounded-2xl h-full min-w-[160px] bg-[#FFBA45] cursor-pointer 
        flex items-start justify-center px-5 flex-col"
          to="/new-category"
        >
          <img src="../../../plus.png" alt="" className="w-6 h-6 mb-5 m-2" />
          <p className=" text-3xl font-extralight ">New Category</p>
        </Link>
        <button
          className="rounded-2xl h-full min-w-[160px] bg-[#64FF77] 
        cursor-pointer flex items-start justify-center px-5 flex-col"
          onClick={() => dispatch(openAddReminderCard())}
        >
          <img
            src="../../../public/draft.png"
            alt=""
            className="w-8 h-8 mb-5 m-2"
          />
          <p className=" text-3xl font-extralight ">Quick Notes</p>
        </button>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      <div className=" w-full md:w-[1200px] h-[1px] bg-[#b8bfc0] " />
    </div>
  );
}
