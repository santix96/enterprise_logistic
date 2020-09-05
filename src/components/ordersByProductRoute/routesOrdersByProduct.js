import React, { useState, useEffect } from "react";
import Crud from '../crud';
import Dialog from '../dialog'
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import CrudTable from '../crud/children/crudTable.js';
import { getOrdersByProduct } from '../../services/services'

const RoutesOrders = () => {
  const [data, setData] = useState([{"status": "NO DATA"}])

  useEffect( async () => {
    let responseData = await getOrdersByProduct();

    setData(responseData);
  }, [])

  return (
    <Container>
      <Typography variant='h1'>
        Pedidos por Producto
      </Typography>
      <br />
      <CrudTable
        data={data}
      />
    </Container>
  );
}

export default RoutesOrders;
