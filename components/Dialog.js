import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {blue,red} from "@material-ui/core/colors"
import {Paper} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import Chips from "./Chips"
import Input from "./Input"
import {Divider,Box} from "@material-ui/core"
import Slider from "./Slider"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root:{
    backgroundColor:"whitesmoke"
  },
  dialogContainer:{
    padding:theme.spacing(1,1.5),
    // margin:theme.spacing(1,.5),
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"whitesmoke"
  },
  chipContainer:{
    backgroundColor:"whitesmoke",
    height:"100%",
    width:"65%",
    display:"flex",
    justifyContent:"flex-end",
    flexDirection:"column",
    allignItems:"flex-end",
    margin:theme.spacing(1.5,0)
  },
  paperContainer:{
    height:"100% !important"
  }
}))

const AlertDialogSlide = function({open,toggleDialog}) {

    const classes = useStyles()
    return (
      <Dialog
        className={classes.root}
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="md"
        fullWidth={true}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={toggleDialog}
        aria-labelledby="Add A New Product"
        aria-describedby="Create A New Product"
      >
        <DialogTitle
         id="product title">
            Add A New Product
        </DialogTitle>
        <DialogContent>
          <Paper elevation={8} 
           className={classes.dialogContainer}>
          <Box>
          <Input inputType={"outlined"} label="Name"
           placeholder="Name"/>
           </Box>
          <Divider flexItem orientation="vertical" />
          <Box className={classes.chipContainer}>
          <Chips/>
          <Slider/>
          </Box>
          </Paper>
          </DialogContent>
        <DialogActions className={classes.root}>
          <Button style={{
              backgroundColor:red[100],
              color:red[500]
          }} onClick={toggleDialog} color="primary">
            Exit
          </Button>
          <Button style={{
              backgroundColor:blue[100],
              color:blue[500]
          }} onClick={toggleDialog} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default AlertDialogSlide