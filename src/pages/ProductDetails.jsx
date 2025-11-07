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
      <div className="mt-4 text-lg font-semibold text-primary space-y-1">
  {produto.price.map((linha, index) => (
    <p key={index}>{linha}</p>
  ))}
</div>
    <div className="mt-10 w-[90%] md:w-[70%] bg-gray-50 p-6 rounded-2xl shadow-md">
  <h3 className="text-2xl font-bold text-dark mb-6 text-center border-b pb-2 border-orange-400">
    📋 Ficha Técnica
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-gray-700">
    <div>
      <p className="font-semibold text-dark">📱 Tela:</p>
      <p>{produto.ficha.tela}</p>
    </div>

    <div>
      <p className="font-semibold text-dark">⚙️ Processador:</p>
      <p>{produto.ficha.processador}</p>
    </div>

    <div>
      <p className="font-semibold text-dark">📸 Câmera:</p>
      <p>{produto.ficha.camera}</p>
    </div>

    <div>
      <p className="font-semibold text-dark">🎥 Filmagens:</p>
      <p>{produto.ficha.filmagens}</p>
    </div>

    <div>
      <p className="font-semibold text-dark">🔋 Bateria:</p>
      <p>{produto.ficha.bateria}</p>
    </div>

    <div>
      <p className="font-semibold text-dark">🧠 Sistema:</p>
      <p>{produto.ficha.sistema}</p>
    </div>

    <div>
      <p className="font-semibold text-dark">📶 NFC:</p>
      <p
        className={
          produto.ficha.nfc.toLowerCase() === "sim"
            ? "text-green-600 font-medium"
            : "text-red-500 font-medium"
        }
      >
        {produto.ficha.nfc}
      </p>
    </div>

    <div>
      <p className="font-semibold text-dark">💧 IP68:</p>
      <p
        className={
          produto.ficha.ip68.toLowerCase() === "sim"
            ? "text-green-600 font-medium"
            : "text-red-500 font-medium"
        }
      >
        {produto.ficha.ip68}
      </p>
    </div>

    <div className="sm:col-span-2">
      <p className="font-semibold text-dark">🛡️ Garantia:</p>
      <p>{produto.ficha.garantia}</p>
    </div>
  </div>
</div>

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