import React, { useEffect, useState } from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import Checkbox from '@material-ui/core/Checkbox';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { makeStyles } from '@material-ui/core/styles';

import { getRoutes, getConveyorsByZone, getOrdersByRoute, assignRoutes, updateConveyor, assignConveyor } from '../../services/services.js';

const AssignRoutes = () => {
  const useStyles = makeStyles( (theme) => ({
    root: {
     flexGrow: 1,
     marginTop: 30,
     display: 'flex',
     oveflow: "auto",
     maxWidth: "100%"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 320,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    titlesGrid: {
      marginTop: '15px',
    },
    saveButton: {
      marginTop: '25px'
    }
  }));

  const [conveyors, setConveyors] = React.useState([]);
  const [conveyor, setConveyor] = React.useState({});

  const [orders, setOrders] = React.useState([]);
  const [assignedOrders, setAssignedOrders] = React.useState([]);

  const [routes, setRoutes] = React.useState([]);
  const [route, setRoute] = React.useState('');

  const [checkbox, setCheckbox] = React.useState('false');

  const [selectedRoute, setselectedRoute] = React.useState('');

  const handleCheckbox = (event) => {
    event.preventDefault();
    if (checkbox == false) {
      setCheckbox(true)
      const orderId = event.target.id;
      orders.map( (order) => {
        if(order._id == orderId){
          order.state = "Pendiente";
          order.route = '';
          const update = assignedOrders.concat(order);
          setAssignedOrders(update);
        }
      })
    }else{
      setCheckbox(false);
      const orderId = event.target.id;
      orders.map( (order) => {
        if(order._id == orderId){
          order.state = "Asignado";
          order.route = route;
          const update = assignedOrders.concat(order);
          setAssignedOrders(update);
        }
      })
    }
  }
  const handleAssign = (event) => {
    event.preventDefault();
    /* Asociar id ruta a la ruta del transportador */
    const update = conveyor;
    update.route = route;
    assignConveyor(update)
    assignRoutes(assignedOrders);
  }
  const handleConveyorChange = async (event) => {
     setConveyor(event.target.value);
    console.log("ASDASDA", conveyor);
  };

  const handleRouteChange = async (event) => {
    let responseConveyors = await getConveyorsByZone(event.target.value);
    setRoute(event.target.value)
    setConveyors(responseConveyors);

    let responseOrders = await getOrdersByRoute(event.target.value);
    setOrders(responseOrders);
  };

  const handleOrdersChange = (event) => {
    setOrders(event.target.value);
  };

  const classes = useStyles();

  useEffect( async () => {
    let responseRoutes = await getRoutes();
    setRoutes(responseRoutes);
  }, [])

  return (
    <Container>
        <Typography variant='h1'>
          Asignar Rutas
        </Typography>
        <br></br>
        <Grid container spacing={4} justify="center">
          <Grid item xs={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Seleccione una Ruta</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={route}
                onChange={handleRouteChange}
                label="Seleccione una Ruta"
              >
                {
                  routes.map( (route) => (
                    <MenuItem value={route.zone}>{route.label}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Seleccione un Transportador</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={conveyor}
                onChange={handleConveyorChange}
                label="Seleccione una Ruta"
              >
                {
                  conveyors.map( (conv) => (
                    <MenuItem value={conv}>{conv.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <form id='assignForm' onSubmit={handleAssign}>
          <Paper>
            <div>
              <Grid container spacing={3} justify="center" className={classes.titlesGrid}>
                <Grid item xs={1} />
                <Grid item xs={3}>
                  <strong>Distribuidor</strong>
                </Grid>
                <Grid item xs={3}>
                  <strong>Ruta</strong>
                </Grid>
                <Grid item xs={3}>
                  <strong>Estado</strong>
                </Grid>
                <Grid item xs={2}>
                  <strong>Fecha de Solicitud</strong>
                </Grid>
                {
                  orders.map( (order) => {
                    return (
                      <>
                        <Grid item xs={1}>
                          <Checkbox
                            id={order._id}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                            style={{paddingTop: '2px'}}
                            onChange={handleCheckbox}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          {order.distributor}
                        </Grid>
                        <Grid item xs={3}>
                          {order.route}
                        </Grid>
                        <Grid item xs={3}>
                          {order.state}
                        </Grid>
                        <Grid item xs={2}>
                          {order.createdAt}
                        </Grid>
                      </>
                    );
                  })
                }
              </Grid>
            </div>
          </Paper>
        </form>
        <Button type='submit' form='assignForm' variant='contained' color='primary' className={classes.saveButton}>
          Guardar Ruta
        </Button>
    </Container>
  )
}

export default AssignRoutes;
