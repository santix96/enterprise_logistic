import React from "react";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import style from '../styles.js';

const CrudActionButton = ({size, operation, ...props}) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.value);
    }
  }

  return(
    <Fab
      style={style.actionButton}
      size={size}
      color={operation == 'edit' ? 'primary' : 'secondary'}
      onClick={handleClick}
    >
      {operation == 'edit' ? <EditIcon /> : <DeleteOutlineIcon/>}
    </Fab>
  )
}

export default CrudActionButton;
