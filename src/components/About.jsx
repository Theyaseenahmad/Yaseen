import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Dialog from "./Dialog"


const About = () => {
  return (
    <div className=" w-full  md:h-[20vh] h-[45vh] md:flex flex flex-col md:flex-row  justify-evenly gap-7 items-center mt-2">

        <div className="w-[20%] md:visible hidden text-sm font-semibold md:flex gap-2 items-center ">
        <h2 className="uppercase font-semibold text-sm">say hello</h2>
        <a href="https://www.instagram.com/yaseenahmad.7/" className="size-8 bg-slate-900 rounded-full flex items-center justify-center p-1"><FaInstagram className="text-lg" /></a>
        <a href="https://www.linkedin.com/in/yaseen-ahmad-578953293/" className="size-8 bg-slate-900 flex items-center justify-center rounded-full p-1"><FaLinkedin className="text-lg" /></a>
        <a href="https://github.com/Theyaseenahmad" className="size-8 bg-slate-900 flex items-center justify-center rounded-full p-1"><FaGithub className="text-lg" /></a>
        </div>

        <div className="md:w-[27%] w-[60%] text-sm font-semibold">
            <p className="md:block  hidden" >
                Hello there, I am Yaseen Ahmad, Full-Stack Web Developer, REACT/NEXTJS and MERN
                building efficient user-friendly websites to convert your target audience.
            </p>

            <p className="md:hidden lg:hidden visible text-center text-base font-bold"  >
                Hello there, I am Yaseen Ahmad, Full-Stack Web Developer,
                building efficient and user-friendly Websites.
            </p>
        </div>



        {/* contact me button region */}

        

        <div onClick={()=>
          document.getElementById('my_modal_1').showModal()
        } className="w-28 text-black h-12 bg-slate-950 border-[1px] border-gray-600 overflow-hidden rounded-xl p-[2px] relative z-30"> 

        {/* <div className="absolute anime -z-20 size-4 shadow-2xl  rounded-full bg-white"></div> */}

        <div className="absolute anime2 -z-20 size-4 shadow-2xl  rounded-full bg-white"></div>

          
            <button 
             className="z-30 bg-gradient-to-t from-slate-500 to-slate-200 w-full h-full  rounded-xl flex items-center justify-center font-bold text-sm">
              Contact Me</button>
        </div>
        {/* contact me button region ends */}


       <Dialog></Dialog>

        
        <div className="md:w-[20%] md:visible md:hidden text-sm font-semibold flex gap-2 items-center ">
        <h2 className="uppercase font-semibold text-sm">say hello</h2>
        <a href="https://www.instagram.com/yaseenahmad.7/" className="size-8 bg-slate-900 rounded-full flex items-center justify-center p-1"><FaInstagram className="text-lg" /></a>
        <a href="https://www.linkedin.com/in/yaseen-ahmad-578953293/" className="size-8 bg-slate-900 flex items-center justify-center rounded-full p-1"><FaLinkedin className="text-lg" /></a>
        <a href="https://github.com/Theyaseenahmad" className="size-8 bg-slate-900 flex items-center justify-center rounded-full p-1"><FaGithub className="text-lg" /></a>
        </div>
    </div>
  )
}

export default About