import { useRef } from "react"
import About from "./components/About"
import Arrow from "./components/Arrow"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Video from "./components/Video"
import Ending from "./components/Ending"


const App = () => {

  const projectRef = useRef(null)

  const arrowFunc = ()=>{
   
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
      
    }
  }

  return (
    <>
    {/* <Drawer></Drawer> */}
    <Navbar></Navbar>
    <Video></Video>
    <About></About>
    <Arrow arrowFunc={arrowFunc}></Arrow>
    <Projects projectRef={projectRef}></Projects>
    <Ending></Ending>
    

    </>
  )
}

export default App