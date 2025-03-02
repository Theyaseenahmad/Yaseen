import AboutDialog from "./AboutDialog"
import Dialog from "./Dialog"


const Navbar = () => {
  return (
    <div className="w-full h-[13vh]  flex items-center p-2 justify-around uppercase text-xs font-bold">
        <div className="h-full w-[30%] md:w-[20%]  flex items-center justify-center">
          
          <a href={'/'} className=" h-full w-[100%]"><img className=" h-full " src="\assets\logo.png" alt="" /></a>
        
        </div>


        <div className="flex items-center justify-around h-full w-full md:w-[40%] ">
            <div  onClick={()=>
          document.getElementById('my_modal_2').showModal()
        } className="leading-tight tracking-tighter hover:cursor-pointer" href="">about</div>

            <AboutDialog></AboutDialog>

            <div onClick={()=>
          document.getElementById('my_modal_1').showModal()
        } className="leading-tight tracking-tighter hover:cursor-pointer" href="">Contact me</div>

            <Dialog></Dialog>
            <a  href="https://drive.google.com/file/d/1VtB_o8tL_EMoEHOZorB7oQtMZ7KSPnjD/view?usp=sharing" className="leading-tight tracking-tighter bg-gradient-to-t from-[#cfc09f] via-[#95771e] to-[#ffae0b] text-transparent bg-clip-text" >My resume</a>
        </div>
    </div>
  )
}

export default Navbar