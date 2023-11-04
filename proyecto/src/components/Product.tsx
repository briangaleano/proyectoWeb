import React from 'react';

interface Product {
  _id: string;
  Nombre: string;
  Marca: string;
  Disponibilidad: boolean;
  Descuento: number;
  PrecioDescuento: number;
  Imagen: string;
  Descripcion: string;
  Categoria: string;
}

interface ProductProps {
  producto: Product;
}

const Product: React.FC<ProductProps> = ({ producto }) => {
  return (
    <div className="product">
      <h2>{producto.Nombre}</h2>
      <p>Marca: {producto.Marca}</p>
      <p>Categoría: {producto.Categoria}</p>
      <p>Precio: ${producto.PrecioDescuento}</p>
      <img src={producto.Imagen} alt={producto.Nombre} />
      <p>{producto.Descripcion}</p>
    </div>
  );
};

export default Product;
