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
      <main>
     <h1 className="text-4xl font-bold text-primary text-center mt-6">
  Agora o Tailwind 4 está funcionando 🔥
</h1>
        <section className="produtos">
          <h2>Catálogo de Produtos 📱 </h2>
          <div className="flex-container">
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
      </main>
      <Footer />
    </>
  );
}

export default Home;
