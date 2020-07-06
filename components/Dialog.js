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
import {useDropzone} from "react-dropzone"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root:{
    backgroundColor:"whitesmoke",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    "& > button":{
      margin:theme.spacing(0,1.5),
      padding:theme.spacing(1,2.3)
    }
  },
  dialogContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderRadius:".5em",
    padding:theme.spacing(0,.8),
    [theme.breakpoints.down("sm")]:{
      flexDirection:"column-reverse"
    }
  },
  chipContainer:{
    height:"100%",
    width:"55%",
    display:"flex",
    justifyContent:"space-evenly",
    flexDirection:"column",
    allignItems:"center",
    padding:theme.spacing(0,1.5),
    margin:theme.spacing(1,0)
  },
  infoContainer:{
    padding:theme.spacing(.5,1),
    backgroundColor:"whitesmoke"
  }
  }))

const AlertDialogSlide = function({open,toggleDialog}) {
  const [file,setFile] = React.useState(null)
  const [name,setName] = React.useState("")

  const handleDrop = async (file) => {
    setFile(file[0])
  }

  const {isDragAccept,getRootProps,getInputProps,acceptedFiles} = useDropzone({
    accept:"image/jpeg,image/png",
    onDrop:handleDrop
  })

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
          <Input inputType={"outlined"}
           label="Name" placeholder="Name"/>
           <Box {...getRootProps({className:classes.infoContainer})}>
             <input {...getInputProps()} />
             {!(acceptedFiles.length > 0) ? 
              <p>Drag 'n' drop product image here,
               or click to select files</p>
               :
               <p>A file image as been selected</p>
             }
             <em>Only *.jpeg and *.png images will be accepted</em>
           </Box>
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
              backgroundColor:red[200],
              color:red[700]
          }} onClick={toggleDialog} color="primary">
            Exit
          </Button>
          <Button style={{
              backgroundColor:blue[200],
              color:blue[700]
          }} onClick={toggleDialog} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default AlertDialogSlide