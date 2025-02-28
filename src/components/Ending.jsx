import Dialog from "./Dialog";

const Ending = () => {
  return (
    <div className="w-full h-[20vh] text-base  flex items-center justify-center md:gap-8 gap-3 mt-10 font-bold md:text-3xl text-white">
      Interested In working with me?
      <div onClick={()=>document.getElementById('my_modal_1').showModal()} className="w-28 text-black h-12 flex items-center justify-center bg-slate-950 border-[1px] border-gray-600 overflow-hidden rounded-xl p-[2px] relative z-30">
        {/* <div className="absolute anime -z-20 size-4 shadow-2xl  rounded-full bg-white"></div> */}

        <div className="absolute anime2 -z-20 size-4 shadow-2xl  rounded-full bg-white"></div>

        <button className="flex items-center justify-center z-30 bg-gradient-to-t from-slate-500 to-slate-200 w-full h-full  rounded-xl  font-bold text-sm">
          Contact Me
        </button>
      </div>

      <Dialog></Dialog>
    </div>
  );
};

export default Ending;
