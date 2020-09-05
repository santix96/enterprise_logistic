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

import CrudActionButton from '../crud/children/crudActionButton.js'
import { updateProduct } from '../../services/services'
import CrudActionButtonStyle from '../crud/styles.js'
import styles from './styles.js'
import { useLocation } from 'react-router-dom';

export default function FormActionDialog({ title, description, fields, operation, disabledFields, updateAction }) {
  let location = useLocation();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    updateAction(e.target);
    window.location.href = ''+location.pathname;
  }

  return (
    <div>
      <CrudActionButton
        size='small'
        color={operation == 'edit' ? 'primary' : 'secondary'}
        operation={operation}
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
          <form style={{width: "450px"}} id='editForm' onSubmit={handleEdit}>
            {
              Object.entries(fields).map((field) => {
                /* #TODO Recibir por props los campos que se desean bol */
                const defaultDisabled = field[0] == "_id" || field[0] == "createdAt" || field[0] == "updatedAt" ;
                return (
                  <TextField
                    style={styles.fieldInput}
                    autoFocus
                    margin="dense"
                    id={field}
                    label={field[0]}
                    type="text"
                    fullWidth
                    defaultValue={field[1]}
                    disabled={defaultDisabled ? true : false }
                  />
                )
              })
            }
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button form="editForm" type="submit" color="primary">
            {operation}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
