import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const Input = function({label,handlePress,focused,type,disabled,value,placeholder,handleChange,...props}) {
  const classes = useStyles();
  return (
        <TextField
          id={`outlined-full-width-${label}-${disabled}`}
          label={label}
          onKeyPress={handlePress}
          autoComplete={""}
          focused={focused}
          style={{ margin: 8 }}
          placeholder={placeholder}
          // helperText="Full width!"
          fullWidth
          margin="dense"
          onChange={handleChange}
          value={value}
          InputLabelProps={{
            shrink: true,
            disabled:disabled,
            focused:focused
          }}
          InputProps={{
            disabled:disabled,
            type:type
          }}
          variant="outlined"
        />
  );
}

export default Input