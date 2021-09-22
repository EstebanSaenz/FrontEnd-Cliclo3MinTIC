import React from 'react'
 export const Users= () => {

    const usuarios = [{id: 1,Nombre:'Daniel',Apellido: 'Zemanate', Edad: 26},
                  {id:2,Nombre:'Valery',Apellido: 'Rivera', Edad: 22},
                  {id:3,Nombre:'Candy',Apellido: 'Rivera', Edad: 17},
                  {id:4,Nombre:'Anderson',Apellido: 'Trujillo', Edad: 32},
                  {id:5,Nombre:'Juliana',Apellido: 'Lopez', Edad: 67}, ];

     //   MAPEO PARA AGREGAR NUMERO A CADA USUARIO
    usuarios.map( (users,index) => {
        // console.log(index);
        return users.inc = index+1;
    });

        return (
            
            <div>
                <table className="table table-striped table-hover table-primary table-lg">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Edad</th>
                        </tr>
                    </thead>
                        <tbody>
                            {
                            usuarios.map((users) => (
                            <tr>
                                <th scope="row">{users.inc}</th>
                                <td >{users.Nombre}</td>
                                <td>{users.Apellido}</td>
                                <td>{users.Edad}</td>
                            </tr>
                               ))
                            }
                        </tbody>
                </table>
             </div>
            
        )
}
