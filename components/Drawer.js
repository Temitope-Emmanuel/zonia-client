import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import {Toolbar} from '@material-ui/core'
import Tree from "./Tree"
// import DrawerContainer from "DrawerContainer"


const drawerWidth =process.env.drawerWidth || 240;

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
    width: theme.spacing(10) + 1,
    backgroundColor:"whitesmoke",
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8.5) + 1,
    },
  }
}));


const DrawerComponent = ({open,handleDrawer}) => {
    const classes = useStyles()
    const theme = useTheme()
    const [isDialog,setIsDialog] = React.useState(false)
    
    const toggleDialog = () => {
      alert("we are open")
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
          open && <Button style={{
            backgroundColor:"grey"
          }} onClick={toggleDialog} >Add Product</Button>
        }
      </Drawer>
              
    )
}

export default DrawerComponent