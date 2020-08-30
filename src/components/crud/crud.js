import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CrudTable from './children/crudTable.js';
import Dialog from '../dialog'

const Crud = ({
  label,
  data,
  dialogBtnLabel,
  buttonPosition,
  dialogDescription,
  dialogActionTitle,
  dialogActionDescription,
  createAction,
  updateAction,
  deleteAction
}) => {
  return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h2" gutterBottom>
              {label}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CrudTable
              title='title'
              data={data}
              editActionTitle={dialogActionTitle}
              editActionDescription={dialogActionDescription}
              updateAction={updateAction}
              deleteAction={deleteAction}
            />
          </Grid>
          <Grid item xs>
            <Dialog
              buttonLabel={dialogBtnLabel}
              description={dialogDescription}
              buttonPosition={buttonPosition}
              dialogButtonLabel="Crear"
              title={"Create"}
              fields={data[0]}
              action={createAction}
            />
          </Grid>
        </Grid>
      </Container>
  );
}

export default Crud;
