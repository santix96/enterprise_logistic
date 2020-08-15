import React from "react";
import Crud from '../crud';
import Dialog from '../dialog'
import AccessibilityIcon from '@material-ui/icons/Accessibility';
//import getRoutes from '../../services/services.js'

const RoutesTransporters = () => {
  const transportadores =
  [
    {
      "id": "CE01",
      "proveedor": "CELEMA"
    },
    {
      "id": "CE02",
      "proveedor": "CELEMA"
    },
    {
      "id": "AL01",
      "proveedor": "ALPINA"
    },
    {
      "id": "MA01",
      "proveedor": "MARGARITA"
    },
    {
      "id": "AL-MA01",
      "proveedor": "MULTIMARCA"
    }
  ]

  return (
    <Crud
      label={"Transportadores"}
      data={transportadores}
      buttonPosition={"center"}
      dialogBtnLabel={"Agregar"}
      dialogDescription={"Descripcion de prueba"}
    />
  );
}

export default RoutesTransporters;
