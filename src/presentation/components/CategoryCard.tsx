import { Link } from "react-router-dom";

export default function CategoryCard() {
  return (
    <Link
      to="/notes"
      className="rounded-2xl h-full min-w-[150px] bg-light2 cursor-pointer 
      flex items-center justify-center"
    >
      <p className=" text-4xl font-extralight ">Category</p>
    </Link>
  );
}
