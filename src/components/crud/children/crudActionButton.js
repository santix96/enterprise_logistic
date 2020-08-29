import React from "react";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { deleteProduct } from '../../../services/services';

import style from '../styles.js';

const CrudActionButton = ({size, operation, item, ...props}) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.value);
    }
  }

  const handleDelete = () => {
    deleteProduct(item);
  }

  return(
    <Fab
      style={style.actionButton}
      size={size}
      color={operation == 'edit' ? 'primary' : 'secondary'}
      onClick={operation == 'edit' ? handleClick : handleDelete}
    >
      {operation == 'edit' ? <EditIcon /> : <DeleteOutlineIcon/>}
    </Fab>
  )
}

export default CrudActionButton;
