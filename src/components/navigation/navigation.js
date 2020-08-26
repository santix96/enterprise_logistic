import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import NavSelector from './navSelector';
import styles from './styles.js'

const Navigation = ({roleUser}) => {
  return (
    <AppBar style={styles.navBar} position="static">
      <Toolbar className="navBar">
        <NavSelector navbarType={roleUser}/>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = (userInfo) => {
  return {
      roleUser: userInfo.roleUser
  }
}

export default connect(mapStateToProps)(Navigation);
