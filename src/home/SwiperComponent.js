import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules'; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
const Slider = () => {

  const whysponsor = [
    { image: "https://iageaagl2025pune.com/new-images/IAGE_Brochure-8.png" },
    { image: "https://iageaagl2025pune.com/new-images/IAGE_Brochure-8.png" },
    { image: "https://iageaagl2025pune.com/new-images/IAGE_Brochure-8.png" },
    { image: "https://iageaagl2025pune.com/new-images/IAGE_Brochure-8.png" },
    { image: "https://iageaagl2025pune.com/new-images/IAGE_Brochure-8.png" },
    { image: "https://iageaagl2025pune.com/new-images/IAGE_Brochure-8.png" },
    { image: "https://iageaagl2025pune.com/new-images/IAGE_Brochure-8.png" },
    { image: "https://iageaagl2025pune.com/new-images/IAGE_Brochure-8.png" },
    { image: "https://iageaagl2025pune.com/new-images/IAGE_Brochure-8.png" },
    { image: "https://iageaagl2025pune.com/new-images/IAGE_Brochure-8.png" },
    { image: "https://iageaagl2025pune.com/new-images/IAGE_Brochure-8.png" },
    { image: "https://iageaagl2025pune.com/new-images/IAGE_Brochure-8.png" },
    { image: "https://iageaagl2025pune.com/new-images/IAGE_Brochure-8.png" },

  ];

  return (
    <div className='bg-black h-[200px] md:h-[250px] lg:h-[300px] pt-[50px] pb-[50px] lg:pt-[100px] lg:pb-[100px]'>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
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
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
      >
        {whysponsor.map((sponsor, index) => (
          <SwiperSlide key={index}>
            <div className="p-4">
              <img src={sponsor.image} alt={`Slide ${index + 1}`} className="max-w-[130px] max-h-[45px] object-cover rounded-lg" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;