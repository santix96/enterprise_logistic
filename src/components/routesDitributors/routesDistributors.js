import React, { useState, useEffect } from "react";
import Crud from '../crud';
import Dialog from '../dialog'
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { getDistributors, createDistributor, updateDistributor, deleteDistributor } from '../../services/services'

const RoutesProducts = () => {
  const [data, setData] = useState([{"status": "NO DATA"}])

  useEffect( async () => {
    let responseData = await getDistributors();

    setData(responseData);
  }, [])

  return (
    <Crud
      label={"Distribuidores"}
      data={data}
      buttonPosition={"right"}
      dialogBtnLabel={"Agregar"}
      dialogDescription={"Descripcion de prueba"}
      dialogActionTitle={"Editar Distribuidor"}
      dialogActionDescription={"Descripcion ..."}
      createAction={createDistributor}
      updateAction={updateDistributor}
      deleteAction={deleteDistributor}
    />
  );
}

export default RoutesProducts;
