import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

import CrudButton from '../crud/children/crudButton';
import { resetUserState } from '../../services/userSession'
import styles from './styles.js'

const NavSelector = ({ roleUser, resetUserState, ...props }) => {
  const handleLogout = () => {
    resetUserState();
  }

  if (roleUser == 'ADMIN') {
    return(
      <>
        <Grid container>
          <Grid item xs={12} >
            <SupervisedUserCircleIcon fontSize={"large"} style={styles.roleIcon} />
            <Typography variant="h6" >
              Enterprise Logistic
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button href="/inventario" style={styles.navButton}>Inventario</Button>
            <Button href="/asignar-rutas" style={styles.navButton}>Asignar Rutas</Button>
            <Button href="/pedidos" style={styles.navButton}>Pedidos</Button>
            <Button href="/rutas" style={styles.navButton}>Rutas</Button>
            <Button href="/zonas" style={styles.navButton}>Zonas</Button>
            <Button href="/transportadores" style={styles.navButton}>Transportadores</Button>
            <Button href="/distribuidores" style={styles.navButton}>Distribuidores</Button>
            <Button href="/proveedores" style={styles.navButton}>Proveedores</Button>
            <Button href="/productos" style={styles.navButton}>Productos</Button>
            <Button href="/login" style={styles.navButton} onClick={handleLogout}>Logout</Button>
          </Grid>
        </Grid>
      </>
    )
  }
  else if(roleUser == 'PROVIDER'){
    return(
      <>
        <BusinessCenterIcon fontSize={"large"} style={styles.roleIcon} />
        <Typography variant="h6" >
          Enterprise Logistic
        </Typography>
        <Button href="/mi-inventario" style={styles.navButton}>Ver mi Inventario</Button>
        <Button href="/login" style={styles.navButton} onClick={handleLogout}>Logout</Button>
      </>
    )
  }
  else if(roleUser == 'DISTRIBUTOR'){
    return(
      <>
        <AddShoppingCartIcon fontSize={"large"} style={styles.roleIcon} />
        <Typography variant="h6" >
          Enterprise Logistic
        </Typography>
        <Button href="/comprar" style={styles.navButton}>Comprar Productos</Button>
        <Button href="/mis-pedidos" style={styles.navButton}>Mis pedidos</Button>
        <Button href="/login" style={styles.navButton} onClick={handleLogout}>Logout</Button>
      </>
    )
  }
  else if(roleUser == 'CONVEYOR'){
    return(
      <>
        <LocalShippingIcon fontSize={"large"} style={styles.roleIcon} />
        <Typography variant="h6" >
          Enterprise Logistic
        </Typography>
        <Button href="/consultar-rutas" style={styles.navButton}>Consultar Rutas</Button>
        <Button href="/historial" style={styles.navButton}>Historial Rutas</Button>
        <Button href="/login" style={styles.navButton} onClick={handleLogout}>Logout</Button>
      </>
    )
  }
  else{
    return(
      <>
      <DirectionsWalkIcon fontSize={"large"} style={styles.roleIcon} />
      <Typography variant="h6" >
        Enterprise Logistic
      </Typography>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetUserState: () => dispatch(resetUserState())
  }
}

const mapStateToProps = (userInfo) => {
  return {
      roleUser: userInfo.roleUser
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavSelector);
