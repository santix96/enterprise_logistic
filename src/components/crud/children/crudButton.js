import React from "react";
import Button from '@material-ui/core/Button';

const CrudButton = ({label, position, color, ...props}) => {
  return(
    <Button
      style={{
        float: position
      }}
      variant="contained"
      color={`${color}`}>
      {label}
    </Button>
  )
}

export default CrudButton;
