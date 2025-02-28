import PropTypes from 'prop-types'

const Arrow = ({arrowFunc}) => {
  return (
    <div onClick={arrowFunc} className="w-full  absolute bottom-0 h-20 hover:cursor-pointer bg-transparent flex flex-col  justify-center items-center text-white ">

        <h2 className="font-bold text-xl uppercase bg-gradient-to-t from-[#cfc09f] via-[#95771e] to-[#ffae0b] text-transparent bg-clip-text mb-1">see projects</h2>
        
        <div className="w-6 animate-bounce h-6  flex items-center justify-center"> <img className='rotate-90 size-10' src="https://img.freepik.com/premium-vector/gold-color-arrow-icon-vector-template_917138-4723.jpg" alt="" /></div>
        
        </div>
  )
}

Arrow.propTypes = {
  arrowFunc: PropTypes.func.isRequired
}

export default Arrow