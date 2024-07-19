import React from 'react';
import { IconButton } from '@mui/material';

const SubmitButton = ({
  text,
  style,
  startIcon,
  endIcon,
  onClick,
  variant,
  disabled,
  type,
}) => {
  return (
    text && (
      <IconButton
        type={type}
        variant={variant}
        sx={style}
        text={text}
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        disableRipple
      >
        {text}
      </IconButton>
    )
  );
};

export default SubmitButton;
