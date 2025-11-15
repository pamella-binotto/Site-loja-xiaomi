import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import HeroCarousel from "../components/HeroCarousel";
import produtos from "../data/produtos";







function Home() {
 

  return (
    <>

      <Header />
      <HeroCarousel />

      {/* Seção HERO */}
      <section id="home" className="bg-dark text-light py-16 px-6 text-center flex flex-col items-center justify-center w-screen h-screen overflow-x-hidden">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Os melhores smartphones Xiaomi estão aqui 🔥
        </h1>
        <p className="max-w-2xl text-gray text-lg mb-8">
          Qualidade, desempenho e garantia de confiança. Explore nossos modelos e descubra o que há de mais novo em tecnologia.
        </p>

        <a href="#modelos">
        <button className="bg-primary text-light font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition-all">
          Ver Modelos
        </button>
        </a>
      </section>

      {/* Seção de Produtos */}
      <section id="modelos" className="bg-light text-dark py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nossos Modelos em Estoque
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {produtos.map((p) => (
            <Link key={p.id} to={`/produto/${p.id}`}>
              <ProductCard
                name={p.name}
                storage={p.storage}
                ram={p.ram}
                image={p.image}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="bg-gray text-dark py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Sobre a Ju Eletrônicos</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Somos especialistas em Xiaomi e atendemos Floripa e região há mais de 6 anos. Todos os nossos aparelhos são novos, lacrados e com garantia, sempre com atendimento próximo, transparente e focado em entender o que você realmente precisa. Nota 5 no Google e entrega rápida na Grande Florianópolis.
        </p>
      </section>


      {/* Seção Contato */}
      <section id="contato" className="bg-dark text-light py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Entre em Contato</h2>
        <p className="text-gray mb-6">
          Fale conosco pelo WhatsApp e descubra as melhores ofertas!
        </p>
        <a
          href="https://wa.me/5548999007742"
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-light px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-all"
        >
          Chamar no WhatsApp
        </a>
      </section>

      <Footer />
    </>
  );
}

export default Home;