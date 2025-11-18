function ProductCard({ name, storage, ram, image}) {
  return (
    <div className="card">
        
        
        <img src={image} alt={name} className="w-auto h-44 mx-auto object-contain" />
     
     
      <h3>{name}</h3>
      <p>{storage}</p>
      <p>{ram}</p>
    </div>
  );
}

export default ProductCard;
