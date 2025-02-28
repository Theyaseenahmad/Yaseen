

const Dialog = () => {
  return (
    <dialog  id="my_modal_1" className="modal ">
    <div className="modal-box border-2 border-yellow-300 font-poppins uppercase leading-tight tracking-wide bg-black ">
      <h3 className="font-semibold text-sm md:text-xl bg-gradient-to-t from-[#cfc09f] via-[#95771e] to-[#ffae0b] text-transparent bg-clip-text">Contact Info :</h3>

      <div className="flex flex-col  items-center gap-1 justify-center md:flex-row lg:flex:row m-4">
      {/* <p className="font-semibold">Email : 
      </p> */}

      <span className="text-sm md:text-xl bg-gradient-to-t from-[#cfc09f] via-[#95771e] to-[#ffae0b] text-transparent bg-clip-text">Email : </span>
      <span className="font-semibold text-sm md:text-xl  bg-gradient-to-t from-[#cfc09f] via-[#95771e] to-[#ffae0b] text-transparent bg-clip-text" href="">
      yaseenahmad02.777@gmail.com</span> 
      </div>
      

        <div className="flex flex-col items-center gap-1 justify-center md:flex-row lg:flex:row">
      {/* <p className="font-semibold">Phone : 
      </p> */}

      <span className="text-sm md:text-xl  bg-gradient-to-t from-[#cfc09f] via-[#95771e] to-[#ffae0b] text-transparent bg-clip-text">Phone : </span>
      <span className="font-semibold text-sm md:text-xl  bg-gradient-to-t from-[#cfc09f] via-[#95771e] to-[#ffae0b] text-transparent bg-clip-text " href="">
      +91-7974495646</span> 
      </div>

      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn rounded-lg">Close</button>
        </form>
      </div>
    </div>
  </dialog>
  )
}

export default Dialog