import React, { useState, useEffect } from "react";
import Crud from '../crud';
import Dialog from '../dialog'
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../../services/services'

const RoutesProducts = () => {
  const [data, setData] = useState([{"status": "NO DATA"}])

  useEffect( async () => {
    let responseData = await getProducts();

    setData(responseData);
  }, [])

  return (
    <Crud
      label={"Productos"}
      data={data}
      buttonPosition={"center"}
      dialogBtnLabel={"Agregar"}
      dialogDescription={"Descripcion de prueba"}
      dialogActionTitle={"Editar Producto"}
      dialogActionDescription={"Descripcion ..."}
      createAction={createProduct}
      updateAction={updateProduct}
      deleteAction={deleteProduct}
    />
  );
}

export default RoutesProducts;
