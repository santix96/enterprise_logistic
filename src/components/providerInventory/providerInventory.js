import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Crud from '../crud';
import { getInventory, getById, addRegistry, deleteRegistry, updateRegistry } from '../../services/services'
import { setRoleUser, resetUserState, getRoleUser, setUserId } from '../../services/userSession'

const ProviderInventoryCrud = ({ roleUser, idUser }) => {
  const [data, setData] = useState([{"status": "NO DATA"}])

  useEffect( async () => {
    let responseData = await getInventory();
    let filteredData = []
    responseData.forEach( (registry, i) => {
      if (registry.provider == idUser) {
        filteredData.push(registry);
      }
    })

    setData(filteredData);
  }, [])

  return (
    <Crud
      label={"Productos en Inventario"}
      data={data}
      buttonPosition={"right"}
      dialogBtnLabel={"Agregar"}
      dialogDescription={"Ingrese los datos de la ruta."}
      createAction={addRegistry}
      updateAction={updateRegistry}
      deleteAction={deleteRegistry}
    />
  );
}

const mapStateToProps = (userInfo) => {
  return {
      roleUser: userInfo.roleUser,
      idUser: userInfo.idUser
  }
}

export default connect(mapStateToProps, null)(ProviderInventoryCrud);
