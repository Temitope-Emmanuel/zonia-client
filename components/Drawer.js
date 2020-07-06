import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Toolbar} from '@material-ui/core'
import Dialog from "./Dialog.js"
import Tree from "./Tree"


const drawerWidth = process.env.drawerWidth || 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    "& > button":{
        borderRadius:".3em",
        margin:"5em 1em",
        letterSpacing:".12em",
        padding:".5em"
    }
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(11) + 1,
    backgroundColor:"whitesmoke",
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8.9) + 1,
    },
  }
}));


const DrawerComponent = ({open,handleDrawer}) => {
    const classes = useStyles()
    const theme = useTheme()
    const [isDialog,setIsDialog] = React.useState(true)
    
    const toggleDialog = () => {
      setIsDialog(!isDialog)
    }

    return(
        <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        {!open && <Toolbar className={classes.toolbar}/>}
        {open && <Divider />}
        <Tree open={open} />
        {
          open && 
          <>
          <Button style={{
            backgroundColor:"grey"
          }} onClick={toggleDialog} >Add Product</Button>
          <Dialog open={isDialog} toggleDialog={toggleDialog}/>
          </>
        }
      </Drawer>
              
    )
}

export default DrawerComponent