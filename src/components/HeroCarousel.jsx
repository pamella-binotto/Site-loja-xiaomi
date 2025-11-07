import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import pococ85 from "../assets/pococ85_hero.png";
import redmi15c from "../assets/redmi15c_hero.png";
import redmi15 from "../assets/redmi15_hero.png";
import bf from "../assets/bf_hero.png";
import pococ85_mb from "../assets/pococ85_mb.png";
import redmi15c_mb from "../assets/redmi15c_mb.png";
import redmi15_mb from "../assets/redmi15_mb.png";
import bf_mb from "../assets/bf_mb.png";

function HeroCarousel() {
  const slides = [
    {
      id: 1,
      image: bf,
      imageMobile: bf_mb,
      link: "#",
    },
    {
      id: 2,
      image: redmi15,
      imageMobile: redmi15_mb,
      link: "#",
    },
    {
      id: 3,
      image: redmi15c,
      imageMobile: redmi15c_mb,
      link: "#",
    },
    {
      id: 4,
      image: pococ85,
      imageMobile: pococ85_mb,
      link: "#",
    },
  ];

  const isMobile = window.innerWidth <= 768;

  return (
    <section className="relative w-full overflow-hidden ">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <a
              href={slide.link}
              className="block relative w-full h-full cursor-pointer"
            >
             
                <img
                  src={isMobile ? slide.imageMobile : slide.image}
                  alt="Promoção Ju Eletrônicos"
                  className="block w-full h-full "
                />
              

              <div className="hidden md:flex absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all items-center justify-center">
                <button className="bg-primary text-light px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-all">
                  Ver detalhes
                </button>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroCarousel;
