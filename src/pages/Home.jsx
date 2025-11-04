import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";



import redmi13 from "../assets/redmi_13.png";
import redmi15c from "../assets/redmi_15C.png";
import pococ85 from "../assets/Poco_C85.png";
import note14 from "../assets/note_14.png";
import note14s from "../assets/note_14s.png";
import note145g from "../assets/note_145g.png"
import pocom7pro from "../assets/poco_M7P.png"
import note14pro from "../assets/note_14p4g.png"
import pocox7 from "../assets/poco_x7.png"
import note14pro5g from "../assets/note_14p5g.png"



function Home() {
  const produtos = [
    { name: "Redmi 13", storage: "128GB Memória Interna", ram: "12GB Ram", image: redmi13 },
    { name: "Redmi 15C", storage: "256GB Memória Interna", ram: "16GB Ram", image: redmi15c },
    { name: "Poco C85", storage: "256GB Memória Interna", ram: "16GB Ram", image: pococ85 },
    { name: "Note 14", storage: "256GB Memória Interna", ram: "16GB Ram", image: note14 },
    { name: "Note 14S", storage: "256GB Memória Interna", ram: "16GB Ram", image: note14s },
    { name: "Note 14 5G", storage: "256GB Memória Interna", ram: "16GB Ram", image: note145g },
    { name: "Poco M7 PRO 5G", storage: "512GB Memória Interna", ram: "24GB Ram", image: pocom7pro },
    { name: "Note 14 PRO", storage: "256GB Memória Interna", ram: "16GB Ram", image: note14pro },
    { name: "Poco X7 5G", storage: "512GB Memória Interna ", ram: "24GB Ram", image: pocox7 },
    { name: "Note 14 PRO 5G", storage: "256GB Memória Interna ", ram: "16GB Ram", image: note14pro5g },
  ];

  return (
    <>
      <Header />

      {/* Seção HERO */}
      <section className="bg-dark text-light py-16 px-6 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Os melhores smartphones Xiaomi estão aqui 🔥
        </h1>
        <p className="max-w-2xl text-gray text-lg mb-8">
          Qualidade, desempenho e garantia de confiança. Explore nossos modelos e descubra o que há de mais novo em tecnologia.
        </p>
        <button className="bg-primary text-light font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition-all">
          Ver Modelos
        </button>
      </section>

      {/* Seção de Produtos */}
      <section className="bg-light text-dark py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nossos Modelos em Estoque
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {produtos.map((p, index) => (
            <ProductCard
              key={index}
              name={p.name}
              storage={p.storage}
              ram={p.ram}
              image={p.image}
            />
          ))}
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="bg-gray text-dark py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Sobre a Ju Eletrônicos</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Somos especialistas em Xiaomi e atendemos Floripa e região há mais de 6 anos. Todos os nossos aparelhos são novos, lacrados e com garantia, sempre com atendimento próximo, transparente e focado em entender o que você realmente precisa. Nota 5 no Google e entrega rápida na Grande Florianópolis.
        </p>
      </section>


      {/* Seção Contato */}
      <section className="bg-dark text-light py-16 px-6 text-center">
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