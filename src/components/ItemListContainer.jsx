import React, { useEffect, useState } from 'react';
import { pedirDatos } from '../helpers/pedirDatos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState();
  const categoria = useParams().categoria;
  console.log(categoria);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((prod) => prod.categoria === categoria));
          setTitulo(categoria);
        } else {
          setProductos(res);
          setTitulo('Productos');
        }
      });
  }, [categoria]);

  return (
    <div className="mt-5 p-4 bg-blue-100 text-center">
      <h2 className="text-2xl md:text-3xl text-blue-500 font-bold mb-4">{greeting}</h2>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
