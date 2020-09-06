import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { setRoleUser, resetUserState, getRoleUser, setUserId } from '../../services/userSession'
import { getUsers, getUserByEmail, login } from '../../services/services'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Enterprise Logistic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({ roleUser, setRoleUser, userId, setUserId }) => {
  const classes = useStyles();

  const userAdmin = {
    email: 'admin@gmail.com',
    password: '123456789',
    role: 'ADMIN'
  }

  const userProvider = {
    email: 'provider@gmail.com',
    password: '123456789',
    role: 'PROVIDER'
  }

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const onChange = (e) => {
    setData({ ...data,[e.target.name]: e.target.value });
  }

    const onSubmitLogin =  async (event) => {
      event.preventDefault();
      setData({...data, 'email': event.target[0].value});
      setData({...data, 'password': event.target[2].value});
      
      const fetchedUser = await login(data.email, data.password);
      console.log('fetch en login ', fetchedUser);
      if (fetchedUser){
        setRoleUser(fetchedUser.type);
      }
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmitLogin} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electronico"
            name="email"
            autoComplete="email"
            autoFocus
            value={data.email}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={data.password}
            onChange={onChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            type='submit'
          >
            Iniciar Sesion
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Crear cuenta"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRoleUser: (roleUser) => dispatch(setRoleUser(roleUser)),
    resetUserState: () => dispatch(resetUserState()),
    setUserId: (idUser) => dispatch(setUserId(idUser))
  }
}

const mapStateToProps = (userInfo) => {
  return {
      roleUser: userInfo.roleUser,
      userId: userInfo.userId

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
