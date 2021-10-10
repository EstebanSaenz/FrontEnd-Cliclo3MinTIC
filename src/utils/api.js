import axios from 'axios';

//TRAER TODOS LOS USUARIOS
export const getUsers = async (setUsers, setRunQuqery) => {
  const options = { method: 'GET', url: 'http://localhost:5000/users' };
  await axios
    .request(options)
    .then(function (response) {
        setUsers(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
    setRunQuqery(false);
};

//TRAER TODOS LOS PRODUCTOS
export const getProducts = async (setProducts, setRunQuqery) => {
  const options = { method: 'GET', url: 'http://localhost:5000/products' };
  await axios
    .request(options)
    .then(function (response) {
      setProducts(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
    setRunQuqery(false);
};

//TRAER TODAS LAS VENTAS
export const getSales = async (setSales, setRunQuqery) => {
  const options = { method: 'GET', url: 'http://localhost:5000/sales' };
  await axios
    .request(options)
    .then(function (response) {
      setSales(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
    setRunQuqery(false);
};