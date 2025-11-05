import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import pococ85 from "../assets/pococ85_hero.png";
import redmi15c from "../assets/redmi15c_hero.png";
import redmi15 from "../assets/redmi15_hero.png";
import bf from "../assets/bf_hero.png";

function HeroCarousel() {
  const slides = [
    {
      id: 1,
      image: bf,
      link: "#", 
    },
    {
      id: 2,
      image: redmi15,
      link: "#", 
    },
    {
      id: 3,
      image: redmi15c,
      link: "#",
    },
    {
      id: 4,
      image: pococ85,
      link: "#",
    },
  ];

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
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
              className="block relative w-full h-full group cursor-pointer"
            >
              {/* Imagem */}
              <img
                src={slide.image}
                alt="Promoção Ju Eletrônicos"
                className="w-full h-full object-cover"
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
