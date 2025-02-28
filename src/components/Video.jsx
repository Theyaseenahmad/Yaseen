const Video = () => {
  return (
    <div className="w-full  h-[25vh] md:h-[55vh] flex items-start  justify-center">
      <div className="w-[75vw] h-full relative ">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full bg-cover brightness-30"
          src="\assets\video2.mp4"
        ></video>
        <div className="w-full h-full absolute bg-black opacity-80 z-10 top-0 left-0 "></div>
        <div className="absolute w-full h-full top-0 left-0 z-20 gap-2 flex flex-col justify-center items-center uppercase">

          <div className="flex w-full px-10 md:px-24 gap-2 md:gap-4 ">
            <h1 className="font-bold text-3xl md:text-7xl text-white">full</h1>
            <h1 className="font-bold text-3xl md:text-7xl text-white">stack</h1>
          </div>

          <div className="flex relative justify-center items-center h-[15%] md:h-[30%] w-[60%] ">
            <div className="h-full m-2  lg:visible">
              <img
                className="h-full w-full bg-cover -rotate-90 "
                src="\assets\animate.gif"
              ></img>
            </div>

            <h1 className="font-bold text-3xl md:text-7xl text-white">Developer</h1>

            <div className="absolute rounded-r-full rounded-b-full size-8 md:size-16 top-[60%] -right-10  md:p-2 p-[4px] bg-[#171717]">


              <div className="w-full h-full rounded-full overflow-hidden ">
                <img className="h-full w-full bg-cover bg-center" src="\assets\dp.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
