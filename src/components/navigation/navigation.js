import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles.js'

const Navigation = () => {
  return (
    <AppBar style={styles.navBar} position="static">
      <Toolbar className="navBar">
        <SupervisorAccountIcon fontSize={"large"} style={styles.roleIcon} />
        <Typography variant="h6" >
          Enterprise Logistic
        </Typography>
        <Button href="/#inventario" style={styles.navButton}>Inventario</Button>
        <Button href="/#" style={styles.navButton}>Pedidos</Button>
        <Button href="/rutas" style={styles.navButton}>Rutas</Button>
        <Button href="/#transportadores" style={styles.navButton}>Transportadores</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation;
