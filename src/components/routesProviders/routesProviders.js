import React, { useState, useEffect } from "react";
import Crud from '../crud';
import Dialog from '../dialog'
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { getProviders, createProvider, updateProvider, deleteProvider } from '../../services/services'

const RoutesProducts = () => {
  const [data, setData] = useState([{"status": "NO DATA"}])

  useEffect( async () => {
    let responseData = await getProviders();

    setData(responseData);
  }, [])

  return (
    <Crud
      label={"Proveedores"}
      data={data}
      buttonPosition={"right"}
      dialogBtnLabel={"Agregar"}
      dialogDescription={"Descripcion de prueba"}
      dialogActionTitle={"Editar Proveedor"}
      dialogActionDescription={"Descripcion ..."}
      createAction={createProvider}
      updateAction={updateProvider}
      deleteAction={deleteProvider}
    />
  );
}

export default RoutesProducts;
