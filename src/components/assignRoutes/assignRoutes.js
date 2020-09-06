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
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
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
     oveflow: "auto",
     display: 'flex',
     maxWidth: "100%"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: width > 550 ? 320 : '100%',
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
  const [route, setRoute] = React.useState({});

  const [checkbox, setCheckbox] = React.useState('false');
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

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
  };

  const handleRouteChange = async (event) => {
    setRoute(event.target.value)
    let responseConveyors = await getConveyorsByZone(event.target.value);
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

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <Container>
        <Typography variant={width > 455 ? 'h1' : 'h2'}>
          Asignar Rutas
        </Typography>
        <br></br>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} md={6} style={{ paddingRight: window.innerHeight < 992 ? '15px' : '0px'}}>
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
                  routes.map( (selectedRoute) => (
                    <MenuItem value={selectedRoute.zone}>{selectedRoute.label}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
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
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right"><strong>Distribuidor</strong></TableCell>
                    <TableCell align="right"><strong>Ruta</strong></TableCell>
                    <TableCell align="right"><strong>Estado</strong></TableCell>
                    <TableCell align="right"><strong>Fecha de Solicitud</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order._id}>
                      <TableCell component="th" scope="row">
                        <Checkbox
                          id={order._id}
                          color="primary"
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                          style={{paddingTop: '2px'}}
                          onChange={handleCheckbox}
                        />
                      </TableCell>
                      <TableCell align="right">{order.distributor}</TableCell>
                      <TableCell align="right">{order.route}</TableCell>
                      <TableCell align="right">{order.state}</TableCell>
                      <TableCell align="right">{order.createdAt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </form>
        <Button type='submit' form='assignForm' variant='contained' color='primary' className={classes.saveButton}>
          Guardar Ruta
        </Button>
    </Container>
  )
}

export default AssignRoutes;
