function ProductCard({ name, storage, ram, image}) {
  return (
    <div className="card">
        <img src={image} alt={name} className="product-img" />
      <h3>{name}</h3>
      <p>{storage}</p>
      <p>{ram}</p>
       <button>Ver ficha técnica</button>
    </div>
  );
}

export default ProductCard;
