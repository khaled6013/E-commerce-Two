import { FaCaretRight } from 'react-icons/fa'
import bar from '../assets/categoryIcon.png'
import { useRef, useState } from 'react'
const NavIn = () => {
    let cateRef = useRef()
    let [ cate , setCate ] = useState(false)

    document.addEventListener("click",(e)=>{
     if(cateRef.current.contains(e.target) == true){
      setCate(!cate)
     }else{
        setCate(false)
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
                <div className="absolute top-7 left-0"> 
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
          <div className="w-1/7">d</div>
        </div>
       </div>
     </div>
    </>
  )
}

export default NavIn