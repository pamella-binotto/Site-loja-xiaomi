import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import avaliacao1 from "../assets/avaliacoes/avaliacao1.png";
import avaliacao2 from "../assets/avaliacoes/avaliacao2.png";
import avaliacao3 from "../assets/avaliacoes/avaliacao3.png";
import avaliacao4 from "../assets/avaliacoes/avaliacao4.png";
import avaliacao5 from "../assets/avaliacoes/avaliacao5.png";
import avaliacao6 from "../assets/avaliacoes/avaliacao6.png";

function GoogleReviews() {
  const reviews = [
    avaliacao1,
    avaliacao2,
    avaliacao3,
    avaliacao4,
    avaliacao5,
    avaliacao6,
  ];

  return (
    <section className="bg-light py-16 px-6 text-dark">
      <h2 className="text-3xl font-bold text-center mb-2">
        Avaliações dos Clientes ⭐
      </h2>

      <p className="text-center text-lg mb-6 text-gray-700">
        Nota <span className="text-primary font-bold">5,0</span> de 5 ·{" "}
        <span className="font-semibold">51 avaliações</span> no Google
      </p>

      <div className="max-w-3xl mx-auto">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="w-full"
        >
          {reviews.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Avaliação ${index + 1}`}
                className="rounded-lg shadow-lg w-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default GoogleReviews;
