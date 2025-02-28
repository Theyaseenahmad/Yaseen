
import gsap from "gsap"
import { useRef } from "react";




const Saas = () => {

  const handleMouseEnter = ()=>{
    // make cursor pointer

    
    gsap.to(circle.current,{
      zIndex: 20,
      opacity:1
    })

  }
  const handleMouseLeave = ()=>{
    gsap.to(circle.current,{
      zIndex: -10,
      opacity:0
    })
  }

  const card = useRef(null)
  const circle = useRef(null)
  const handleMouseMove = (e)=>{
    if (card.current && circle.current) {
      const cardRect = card.current.getBoundingClientRect(); // Get card's position
      const offsetX = e.clientX - cardRect.left; // Mouse x position relative to card
      const offsetY = e.clientY - cardRect.top;  // Mouse y position relative to card

      gsap.to(circle.current, {
        x: offsetX - circle.current.offsetWidth / 2, // Center the circle on the mouse
        y: offsetY - circle.current.offsetHeight / 2, // Center the circle on the mouse
        zIndex: 20,
      });
    }
  }

  
  return (
   <div className="w-full flex  items-center justify-center">

{/* main card */}
     <div ref={card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} id="card"  className="flex relative gap-1 md:w-[75%] w-[90%] bg-black  h-60 justify-center">

      

<div id="circle" ref={circle} className="absolute md:flex md:flex-col hidden md:visible justify-start items-start top-0 left-0 size-32 pointer-events-none  rounded-full bg-slate-950 p-6 text-md font-bold -z-40 border-[2px] border-[#ffae0b]"><h2 className="bg-gradient-to-t from-[#cfc09f] via-[#95771e] to-[#ffae0b] text-transparent bg-clip-text">View </h2><h2 className="bg-gradient-to-t from-[#cfc09f] via-[#95771e] to-[#ffae0b] text-transparent bg-clip-text">Website</h2></div>

  <div  className="w-[33%] h-full rounded-tl-lg rounded-bl-lg overflow-hidden">
    <img src="\assets\conv.png" className="w-full h-full object-cover" alt="" />
  </div>
  
  <div  className="w-[67%] p-4 h-full bg-[#222222] rounded-tr-lg rounded-br-lg flex flex-col justify-start items-start gap-2">

    <div className="h-2 rounded-xl border-[1px] bg-[#111111] border-gray-700 p-2 flex items-center justify-center"><h5 className="text-xs font-sans tracking-tighter">Stripe, NextJS & OpenAI</h5></div>

    <div><h2 className="md:text-2xl font-bold text-white">
    Transcribed.io : Convert Video to Text</h2>
      </div>

      <div><p className="text-xs font-semibold">SaaS platform that converts video content into accurate, editable text using OpenAI&apos;s models. Built with Next.js for seamless performance and integrated with Stripe, it provides a fast solution to transcribe videos efficiently.</p></div>

  </div>
  
</div>
   </div>
  )
}

export default Saas
