import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" w-screen h-[45px] overflow-hidden bg-dark flex items-center justify-center ">
      {/* <div className=" space-x-16 text-light font-light text-xl flex flex-row items-center px-16 justify-start">
        <a href="#" className=" text-right py-3">
            Quick Notes
        </a>
        <a href="#" className=" text-right py-3">
            Folders
        </a>
        <div className=" h-2 w-2 rounded-full bg-light" />
        <a href="#" className=" w-52 text-left py-3">
s
        </a>
      </div> */}
      <div className=" space-x-16 text-light font-light text-xl flex flex-row items-center px-16 justify-start">
        <Link to="sign-in" className="text-right py-3">
          Sign in
        </Link>
        <Link
          to="sign-up"
          className="text-right py-2 text-dark bg-light px-4 rounded-lg"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
