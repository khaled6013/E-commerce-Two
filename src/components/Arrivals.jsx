
import Slider from "react-slick";

const Arrivals = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  
}
  return (
   <>
     <div className="">
        <div className="w-10/12 mx-auto">
          <div className="">
            <h2 className='text-[#262626] text-[39px] font-semibold font-dm'>New Arrivals</h2>
          </div>
          <div className="">
            <Slider {...settings}>
            <div>
              <h3>hello</h3>
            </div>
            <div>
              <h3>hello</h3>
            </div>
            <div>
              <h3>hello</h3>
            </div>
            <div>
              <h3>hello</h3>
            </div>
            </Slider>
          </div>
        </div>
     </div>
   </>
  )
}

export default Arrivals