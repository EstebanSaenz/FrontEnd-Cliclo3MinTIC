import axios from 'axios';

//TRAER TODAS LAS VENTAS
export const getSales = async (successCallback, errorCallback) => {
    const options = { method: 'GET', url: 'http://localhost:5000/sales' };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//CREAR NUEVA VENTA
export const createSale = async (data, successCallback, errorCallback) => {
    const options = {
      method: 'POST',
      url: 'http://localhost:5000/sales/',
      headers: { 'Content-Type': 'application/json' },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//EDITAR VENTA
export const updateSale = async (id, data, successCallback, errorCallback) => {
    const options = {
      method: 'PATCH',
      url: `http://localhost:5000/sales/${id}/`,
      headers: { 'Content-Type': 'application/json' },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

//ELIMINAR VENTA
export const deleteSale = async (id, successCallback, errorCallback) => {
    const options = {
      method: 'DELETE',
      url: `http://localhost:5000/sales/${id}/`,
      headers: { 'Content-Type': 'application/json' },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };