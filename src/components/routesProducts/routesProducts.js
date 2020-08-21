import React, { useState, useEffect } from "react";
import Crud from '../crud';
import Dialog from '../dialog'
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import {
  getProducts
} from '../../services/services.js'
import axios from 'axios';

const RoutesProducts = () => {
  const [data, setData] = useState([{"status": "NO DATA"}])
  const url = 'http://localhost:4000/products/all'

  useEffect( async () => {
    let responseData = await getProducts();

    setData(responseData);
  }, [])

  return (
    <Crud label = {
      "Productos"
    }
    data = {
      data
    }
    buttonPosition = {
      "center"
    }
    dialogBtnLabel = {
      "Agregar"
    }
    dialogDescription = {
      "Descripcion de prueba"
    }
    />
  );
}

export default RoutesProducts;
