

const AboutDialog = () => {
  return (
    <dialog  id="my_modal_2" className="modal">
    <div className="modal-box border-2 border-white">
      
      <p>
        Hi, I’m Yaseen Ahmad, a Full-Stack Web Developer specializing in React, Next.js, and the MERN stack. My journey began with a curiosity about websites, leading me to master front-end and back-end technologies.
        

       

</p>
<br />
<p> Open to  <span className="underline">freelance work</span>, <span className="underline">collaborations</span>, and <span className="underline">job opportunities</span>—let’s connect on LinkedIn, GitHub, or Instagram !</p>

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

export default AboutDialog