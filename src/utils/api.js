import axios from 'axios';

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