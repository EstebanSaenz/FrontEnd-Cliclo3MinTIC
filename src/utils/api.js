import axios from 'axios';

export const obtenerVehiculos = async (setUsers, setRunQuqery) => {
  const options = { method: 'GET', url: 'https://vast-waters-45728.herokuapp.com/vehicle/' };
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