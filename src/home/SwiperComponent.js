import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules'; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from "../image/1-white.png";
import image2 from "../image/2-white.png";
import image3 from "../image/3-white.png";
import image4 from "../image/4-white.png";
import image5 from "../image/5-white.png";
import image6 from "../image/6-white.png";
import image7 from "../image/7-white.png";
import 'swiper/css';
const Slider = () => {

  const whysponsor = [
    { image: image1 }, 
    { image: image2 }, 
    { image: image3 }, 
    { image: image4 }, 
    { image: image5 }, 
    { image: image6 }, 
    { image: image7 }, 
  

  ];

  return (
    <div className=''>
      <Swiper
        spaceBetween={0}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}

        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }}
      >
        {whysponsor.map((sponsor, index) => (
          <SwiperSlide key={index}>
            <div className="px-[15px] group">
              <img src={sponsor.image} alt={`Slide ${index + 1}`} className="group-hover:grayscale-0 grayscale w-[100%] max-h-[125px] object-cover rounded-lg" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;