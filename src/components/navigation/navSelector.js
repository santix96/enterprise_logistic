import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CrudButton from '../crud/children/crudButton';
import { resetUserState } from '../../services/userSession'
import styles from './styles.js'

const NavSelector = ({navbarType, resetUserState, ...props}) => {
  const handleLogout = () => {
    resetUserState();
  }
  
  if (navbarType == 'ADMIN') {
    return(
      <>
        <Button href="/#inventario" style={styles.navButton}>Inventario</Button>
        <Button href="/asignar-rutas" style={styles.navButton}>Asignar Rutas</Button>
        <Button href="/#" style={styles.navButton}>Pedidos</Button>
        <Button href="/rutas" style={styles.navButton}>Rutas</Button>
        <Button href="/transportadores" style={styles.navButton}>Transportadores</Button>
        <Button href="/productos" style={styles.navButton}>Productos</Button>
        <Button href="/login" style={styles.navButton} onClick={handleLogout}>Logout</Button>
      </>
    )
  }
  else if(navbarType == 'DISTRIBUTOR'){
    return(
      <>
        <Button href="/comprar" style={styles.navButton}>Comprar Productos</Button>
        <Button href="/mis-pedidos" style={styles.navButton}>Mis pedidos</Button>
        <Button href="/login" style={styles.navButton} onClick={handleLogout}>Logout</Button>
      </>
    )
  }
  else if(navbarType == 'CONVEYOR'){
    return(
      <>
        <Button href="/consultar-rutas" style={styles.navButton}>Consultar Rutas</Button>
        <Button href="/historial" style={styles.navButton}>Historial Rutas</Button>
        <Button href="/login" style={styles.navButton} onClick={handleLogout}>Logout</Button>
      </>
    )
  }
  else{
    return(
      <>
        <Redirect to="/login" />
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetUserState: () => dispatch(resetUserState())
  }
}

export default connect(null,mapDispatchToProps)(NavSelector);
