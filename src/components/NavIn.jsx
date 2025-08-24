import { FaCaretRight, FaShoppingCart, FaUser } from 'react-icons/fa'
import bar from '../assets/categoryIcon.png'
import { useRef, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
const NavIn = () => {
    let cateRef = useRef()
    let logRef = useRef()
    let cartRef = useRef()
    let [ cart ,setCart] = useState(false)
    let [log , setLog] = useState(false)
    let [ cate , setCate ] = useState(false)

    document.addEventListener("click",(e)=>{
     if(cateRef.current.contains(e.target) == true){
      setCate(!cate)
     }else{
        setCate(false)
     }
     if(logRef.current.contains(e.target) == true){
      setLog(!log)
     }else{
      setLog(false)
     }
     if(cartRef.current.contains(e.target) == true){
      setCart(!cart)
     }else{
      setCart(false)
     }
    })


  return (
    <>
     <div className="bg-[#F5F5F3] py-10">
       <div className="lg:w-10/12 w-11/12 mx-auto">
        <div className="flex items-center">
          <div className="w-2/7 relative">
            <div className="flex items-center cursor-pointer" ref={cateRef}>
                <img src={bar} alt="" />
                <p className='text-[#262626] text-[14px] font-Dm font-normal'>Shop by Category</p>
            </div>
            {cate && 
                <div className="absolute top-7 left-0 z-99"> 
                    <div className="w-[263px] h-[300px] bg-[#2D2D2D] ">
                    <div className="flex items-center border-b-2 border-[#ffffff42] pb-3 pt-3 pl-3">
                        <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Accesories</a>
                        < FaCaretRight className='ml-[130px] text-[#FFFFFFB2]' />
                    </div>
                    <div className="flex items-center border-b-2 border-[#ffffff42] pb-3 pt-3 pl-3">
                        <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Accesories</a>
                        < FaCaretRight className='ml-[130px] text-[#FFFFFFB2]' />
                    </div>
                    <div className="flex items-center border-b-2 border-[#ffffff42] pb-3 pt-3 pl-3">
                        <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Accesories</a>
                        < FaCaretRight className='ml-[130px] text-[#FFFFFFB2]' />
                    </div>
                    <div className="flex items-center border-b-2 border-[#ffffff42] pb-3 pt-3 pl-3">
                        <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Accesories</a>
                        < FaCaretRight className='ml-[130px] text-[#FFFFFFB2]' />
                    </div>
                    <div className="flex items-center border-b-2 border-[#ffffff42] pb-3 pt-3 pl-3">
                        <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Accesories</a>
                        < FaCaretRight className='ml-[130px] text-[#FFFFFFB2]' />
                    </div>
                    <div className="flex items-center border-b-2 border-[#ffffff42] pb-3 pt-3 pl-3">
                        <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Accesories</a>
                        < FaCaretRight className='ml-[130px] text-[#FFFFFFB2]' />
                    </div>
                    </div>
                </div>
            }
          </div>
          <div className="w-4/7">
           <div className="">
            <input type="text" className='lg:w-[560px] bg-[#FFFFFF] py-4 pl-3 outline-0' placeholder='Search Products' />
           </div>
          </div>
          <div className="w-1/7">
            <div className="flex items-center gap-x-11 justify-end">
              <div className="relative">
                <FaUser className='cursor-pointer' ref={logRef}/>
                {log &&
                <div className="absolute top-6 right-0 cursor-pointer z-99">
                    <div className="bg-[#2B2B2B]  py-[17px] px-[55px] ">
                      <p className='font-Dm font-bold text-[14px] text-[#FFFFFF]  lg:w-[84px]'>My Account</p>
                    </div>
                    <div className="bg-[#F0F0F0]  py-[17px] px-[55px]">
                      <p className='font-Dm font-bold text-[14px] text-[#262626] text-center'>Log Out</p>
                    </div>
                  </div>
                }
              </div>
              <div className="relative">
                <FaShoppingCart   className='cursor-pointer' ref={cartRef}/>
                {cart && 
                <div className="absolute top-6 right-0 z-99">
                  <div className="bg-[#F5F5F3] py-5 w-[358px] pl-5">
                      <div className="flex items-center relative">
                          <div className="h-[80px] w-[80px] bg-[#979797]"></div>
                          <div className="pl-5">
                              <p className='text-[#262626] text-[14px] font-dm font-bold w-[131px]'>Black Smart Watch</p>
                              <p className='text-[#262626] text-[14px] font-dm font-bold'>$44.00</p>
                          </div>
                          <div className=""><RxCross2 className='absolute top-[40%] right-5 cursor-pointer' /></div>
                      </div>
                  </div>
                  <div className="pt-[14px] w-[358px] pl-5 pb-[36px] bg-[#F0F0F0]">
                      <div className="">
                          <span className='text-[#767676] text-[16px] font-dm font-normal'>Subtotal:</span><span className='text-[#262626] text-[14px] font-dm font-bold'>$44.00</span>
                      </div>
                      <div className="flex items-center mt-[25px]">
                          <div className="">
                              <a href="#" className='px-10 border-2 py-4 text-[#262626] text-[14px] font-dm font-bold hover:bg-black hover:text-white'>View Cart</a>
                          </div>
                          <div className="ml-4">
                              <a href="#" className='px-10 border-2 py-4 text-[#262626] text-[14px] font-dm font-bold hover:bg-black hover:text-white'>Checkout</a>
                          </div>
                      </div>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
       </div>
     </div>
    </>
  )
}

export default NavIn