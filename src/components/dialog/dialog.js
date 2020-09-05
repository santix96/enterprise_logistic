import React from 'react';
import Button from '@material-ui/core/Button';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useLocation } from 'react-router-dom';

import CrudButton from '../crud/children/crudButton.js'
import styles from './styles.js'

export default function FormDialog({ buttonLabel, title, description, fields, dialogButtonLabel, buttonPosition, action }) {
    let location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    action(event.target);
    window.location.href = ''+location.pathname;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CrudButton
        label={buttonLabel}
        variant="outlined"
        color="primary"
        position={buttonPosition}
        onClick={handleClickOpen}
      />

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Grid container>
          <Grid item xs={1}>
            <AccountTreeIcon
              style={styles.dialogIcon}
              fontSize={"large"}
              />
          </Grid>
          <Grid item xs={11}>
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          </Grid>
        </Grid>
        <DialogContent>
          <DialogContentText>
            {description}
          </DialogContentText>
          <form style={{width: "450px"}} id='createForm' onSubmit={handleSubmit}>
            {
              Object.keys(fields).map( (field) =>{
                const defaultDisabled = field == "_id" || field == "createdAt" || field == "updatedAt" ;
                return (
                    <TextField
                      style={styles.fieldInput}
                      autoFocus
                      margin="dense"
                      id={field}
                      label={field}
                      type="text"
                      fullWidth
                      value={formData.field}
                      style={{display: defaultDisabled ? 'none' : 'block'}}
                    />
                );
              })
            }
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button form='createForm' type="submit" color="primary">
            {dialogButtonLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
