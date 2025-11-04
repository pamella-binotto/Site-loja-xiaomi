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
      title: "Ofertas de Black Friday 🖤",
      subtitle:
        "Aproveite descontos exclusivos nos melhores modelos Xiaomi. Estoque limitado!",
      button: "Ver Ofertas",
    },
    {
      id: 2,
      image: redmi15,
      title: "Novo Redmi 15",
      subtitle: "Desempenho e design premium com câmeras incríveis 📱",
      button: "Compre Agora",
    },
    {
      id: 3,
      image: redmi15c,
      title: "Redmi 15C em promoção!",
      subtitle: "Mais memória, mais velocidade — perfeito para o dia a dia 🚀",
      button: "Ver Modelos",
    },
    {
      id: 4,
      image: pococ85,
      title: "POCO C85",
      subtitle: "Alta performance e bateria que dura o dia inteiro ⚡",
      button: "Saiba Mais",
    },
  ];

  return (
    <section className="relative w-full h-[80vh]">
      <Swiper
        spaceBetween={30}
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
        className="mySwiper w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Imagem de fundo */}
            <div
              className="w-full h-full bg-cover bg-center flex flex-col items-center justify-center text-center text-light"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Fundo escuro transparente pra contraste */}
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 max-w-3xl px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100">
                  {slide.subtitle}
                </p>
                <button className="bg-primary text-light px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-all">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroCarousel;
