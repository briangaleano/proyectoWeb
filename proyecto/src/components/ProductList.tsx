import React, { useEffect, useState } from 'react';
import Product from './Product'; // Importa la interfaz desde otro archivo

interface ProductData {
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

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    // Realizar la solicitud a la API
    fetch('https://api-desarrollo.onrender.com')
      .then((response) => response.json())
      .then((data: ProductData[]) => { // Asegúrate de especificar el tipo
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product producto ={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
