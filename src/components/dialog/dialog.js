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

import CrudButton from '../crud/children/crudButton.js'
import styles from './styles.js'

export default function FormDialog({ buttonLabel, title, description, fields, operation, buttonPosition }) {
  const [open, setOpen] = React.useState(false);

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
          {
            Object.keys(fields).map( (field) => (
              <TextField
                style={styles.fieldInput}
                autoFocus
                margin="dense"
                id={field}
                label={field}
                type="text"
                fullWidth
              />
            ))
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            {operation}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
