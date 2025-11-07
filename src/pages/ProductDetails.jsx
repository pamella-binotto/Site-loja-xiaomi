import { useParams, Link } from "react-router-dom";
import produtos from "../data/produtos";

function ProductDetails() {
  const { id } = useParams();
  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    return <p className="text-center mt-10">Produto não encontrado 😢</p>;
  }

  return (
    <div className="flex flex-col items-center text-center p-8">
      <img src={produto.image} alt={produto.name} className="w-72 rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2 text-gray-900">{produto.name}</h1>
      <p className="text-gray-600">{produto.storage}</p>
      <p className="text-gray-600 mb-4">{produto.ram}</p>

      <Link
        to="/"
        className="mt-6 bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition-all"
      >
        Voltar
      </Link>
    </div>
  );
}

export default ProductDetails;