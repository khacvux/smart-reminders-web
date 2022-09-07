import { useDispatch, useSelector } from "react-redux";
import { IRootReducer } from "../../core/redux/rootReducer";
import { motion } from "framer-motion";
import { closeReminderModal } from "../../core/redux/modal/actions";

export default function ReminderModal() {
  const visible = useSelector(
    (state: IRootReducer): boolean => state.modal.reminderModal
  );
  const dispatch = useDispatch();

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
            onClick={() => dispatch(closeReminderModal())}
          >
            <div
              className=" w-full md:w-[900px] h-3/4 bg-light rounded-2xl border border-[#ced6d7]
              flex flex-col items-center relative
            "
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <button onClick={() => dispatch(closeReminderModal())}>
                <img
                  src="../../close.png"
                  alt="close"
                  className="absolute w-10 h-10 top-6 right-6"
                />
              </button>
              <div className="w-full h-[250px] flex flex-row items-center px-20 ">
                <div className="w-[250px] h-full flex flex-col items-center justify-center">
                  <p className="text-7xl font-thin">12:12</p>
                  <p className="text-xl">12/12/2222</p>
                  <div className=" w-5/6 h-[10px] bg-[#FFBA45] my-6 mx-auto rounded-full" />

                </div>
                <div className="flex-1 ">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum explicabo assumenda consequuntur maxime culpa! Nisi,
                    officia? Cumque molestiae sunt aliquam veritatis perferendis
                    nihil eligendi amet doloribus. Impedit maiores officia
                    voluptatem!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
