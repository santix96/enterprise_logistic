import React, { uesState, useEffect } from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { getConveyors } from '../../services/services.js';
import MapContainer from '../GoogleMap/googleMap';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selector: {
    paddingTop: '15px'
  }
}));

const ConveyorTracing = () => {
  const classes = useStyles();
  const [conveyors, setConveyors] = React.useState([]);
  const [conveyor, setConveyor] = React.useState({});

  useEffect( async () => {
    let responseRoutes = await getConveyors();
    setConveyors(responseRoutes);
  }, [])

  const handleConveyorChange = async (event) => {
    setConveyor(event.target.value)
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant={'h1'}>
          Seguimiento Transportadores
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.selector}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Seleccione una Transportador</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={conveyor}
            onChange={handleConveyorChange}
            label="Seleccione una Ruta"
          >
            {
              conveyors.map( (selectedConveyor) => (
                <MenuItem value={selectedConveyor}>{selectedConveyor.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <MapContainer latitud={"5.068488"} longitud={"-75.484470"} name={conveyor.name} style={{paddingRight: '30px'}}/>
      </Grid>
    </Grid>
  )
}

export default ConveyorTracing;
