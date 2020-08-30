import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import { resetUserState } from '../../services/userSession'

import DistributorSignUp from '../signup/distributor';

const SignupTypeSelector = ({type}) => {
  return (
    <Container>
      <Typography
        align='center'
        variant='h3'
        >
        ¿Que tipo de usuario eres?
      </Typography>
      <br/>
      <br/>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography
            align='center'
            variant='h5'
            >
            Proveedor
          </Typography>
          <Button href="/signup/proveedor">
            <BusinessCenterIcon fontSize='large'/>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Typography
            align='center'
            variant='h5'
            >
            Distribuidor
          </Typography>
          <Button href="/signup/distribuidor">
            <AddShoppingCartIcon fontSize='large'/>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Typography
            align='center'
            variant='h5'
            >
            Transportador
          </Typography>
          <Button href="/signup/transportador">
            <LocalShippingIcon fontSize='large'/>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignupTypeSelector;
