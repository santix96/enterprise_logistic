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
  deleteAction,
  disableEdit,
  disableDelete,
  disableCreate
}) => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} mx={6}>
            <Typography variant={width > 992 ? 'h1' : 'h2'} component="h2" gutterBottom>
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
              disableEdit={disableEdit}
              disableDelete={disableDelete}
            />
          </Grid>
          <Grid item xs={12}>
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
