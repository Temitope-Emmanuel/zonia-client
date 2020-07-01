import React from 'react';
import Menu from '@material-ui/core/Menu';

export default function SimpleMenu({anchorEl,handleClose,children,...props}) {

  return (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
  <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        {children}
      </Menu>
  );
}
