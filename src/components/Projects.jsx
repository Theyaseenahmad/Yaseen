import PropTypes from 'prop-types'
import ChessCard from './ChessCard'
import CrowdFunds from './CrowdFunds'
import TrueFeedback from './TrueFeedback'
import Ecom from './Ecom'
// import UberExt from './UberExt'
import Genform from './GenForm'
import FinanceTracker from './Finance-Tracker'
import Coupon from './Coupon'
import Email from './Email'

const Projects = ({projectRef}) => {
  return (
    <div ref={projectRef} className=" mt-32 min-h-screen w-full flex justify-center items-center">
        <div className='md:w-[70%] w-full  min-h-screen gap-14  flex flex-col justify-start items-start md:p-4 '>
          <h2 className='font-bold text-3xl p-4 md:p-0 text-slate-600 uppercase'>Projects</h2>
          <FinanceTracker></FinanceTracker>
          <Coupon></Coupon>
          <Email></Email>
          <CrowdFunds></CrowdFunds>
          <Genform></Genform>
          <TrueFeedback></TrueFeedback>
          <Ecom></Ecom>
          <ChessCard></ChessCard>
         
          {/* <UberExt></UberExt> */}
          
          
          
          
          
        </div>
    </div>
  )
}

Projects.propTypes = {
  projectRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

export default Projects