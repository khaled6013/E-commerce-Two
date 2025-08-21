import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'
const Navbar = () => {
    let [menu,setMenu] = useState(false)
    
  return (
    <>
     <div className="lg:py-6 py-3">
        <div className="lg:w-10/12 mx-auto w-11/12">
          <div className="lg:flex items-center">
            <div className="lg:w-4/12">
                <img src={logo} alt="" />
            </div>
            <div className={`lg:w-8/12 lg:mt-0 mt-4`}>
                <ul className={`gap-x-10 lg:flex duration-200 ease-in-out ${menu == true ? "block":"hidden"}`}>
                    <li className='text-[14px] text-[#767676] font-normal font-Dm hover:text-[#262626] hover:font-bold'>Home</li>
                    <li className='text-[14px] text-[#767676] font-normal font-Dm hover:text-[#262626] hover:font-bold'>Shop</li>
                    <li className='text-[14px] text-[#767676] font-normal font-Dm hover:text-[#262626] hover:font-bold'>About</li>
                    <li className='text-[14px] text-[#767676] font-normal font-Dm hover:text-[#262626] hover:font-bold'>Contacts</li>
                    <li className='text-[14px] text-[#767676] font-normal font-Dm hover:text-[#262626] hover:font-bold'>Journal</li>
                </ul>
            </div>
            <div className="lg:hidden absolute top-3 right-3" onClick={()=>setMenu(!menu)}>
                {menu ? <RxCross2 /> :<FaBars />}
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default Navbar