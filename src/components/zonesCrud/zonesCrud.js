import React, { useEffect, useState } from "react";
import Crud from '../crud';

import { createZone, updateZone, deleteZone, getZones } from '../../services/services'

const ZonesCrud = () => {
  const [data, setData] = useState([{"status": "NO DATA"}])

  useEffect( async () => {
    let responseData = await getZones();

    setData(responseData);
  }, [])

  return (
    <Crud
      label={"Zonas"}
      data={data}
      buttonPosition={"right"}
      dialogBtnLabel={"Agregar"}
      dialogDescription={"Ingreselos datos de la zona."}
      createAction={createZone}
      updateAction={updateZone}
      deleteAction={deleteZone}
    />
  );
}

export default ZonesCrud;
