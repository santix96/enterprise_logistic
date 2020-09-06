import React, { useEffect, useState } from "react";
import Crud from '../crud';
import { getRoutes } from '../../services/services.js';
import { createRoute, updateRoute, deleteRoute } from '../../services/services';

const RoutesCrud = () => {
  const [data, setData] = useState([{"status": "NO DATA"}])

  useEffect( async () => {
    let responseData = await getRoutes();
    setData(responseData);
  }, [])

  return (
    <Crud
      label={"Rutas"}
      data={data}
      buttonPosition={"center"}
      dialogBtnLabel={"Agregar"}
      dialogDescription={"Ingreselos datos de la ruta."}
      createAction={createRoute}
      updateAction={updateRoute}
      deleteAction={deleteRoute}
    />
  );
}

export default RoutesCrud;
