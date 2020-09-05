import React, { useState, useEffect } from "react";
import Crud from '../crud';
import Dialog from '../dialog'
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { getConveyors, createConveyor, updateConveyor, deleteConveyor } from '../../services/services'
//import getRoutes from '../../services/services.js'

const RoutesTransporters = () => {
  const [data, setData] = useState([{"status": "NO DATA"}])

  useEffect( async () => {
    let responseData = await getConveyors();

    setData(responseData);
  }, [])

  return (
    <Crud
      label={"Transportadores"}
      data={data}
      buttonPosition={"center"}
      dialogBtnLabel={"Agregar"}
      dialogDescription={"Descripcion de prueba"}
      createAction={createConveyor}
      updateAction={updateConveyor}
      deleteAction={deleteConveyor}
    />
  );
}

export default RoutesTransporters;
