import React, { useEffect, useState } from "react";
import Crud from '../crud';
import { getInventory, getById, addRegistry, deleteRegistry, updateRegistry } from '../../services/services'

const InventoryCrud = () => {
  const [data, setData] = useState([{"status": "NO DATA"}])

  useEffect( async () => {
    let responseData = await getInventory();

    setData(responseData);
  }, [])

  return (
    <Crud
      label={"Inventario"}
      data={data}
      buttonPosition={"center"}
      dialogBtnLabel={"Agregar"}
      dialogDescription={"Ingreselos datos de la ruta."}
      createAction={addRegistry}
      updateAction={updateRegistry}
      deleteAction={deleteRegistry}
      disableEdit={true}
      disableDelete={true}
    />
  );
}

export default InventoryCrud;
