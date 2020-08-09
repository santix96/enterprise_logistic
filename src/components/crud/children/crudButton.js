import React from "react";
import Button from '@material-ui/core/Button';

const CrudButton = ({label, position, color, ...props}) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.value);
    }
  }

  return(
    <Button
      style={{
        float: position,
      }}
      variant="contained"
      onClick={handleClick}
      color={`${color}`}
    >
      {label}
    </Button>
  )
}

export default CrudButton;
