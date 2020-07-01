import {Box} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"
import {MdAddShoppingCart} from 'react-icons/md'
import TextField from "./TextField"
import BodyWork from "./bodyWork"

const useStyles = makeStyles(theme => ({
    // root:{
    //     backgroundColor:"white",
    //     zIndex:"1200",
    //     display:"flex",
    //     justifyContent:"center",
    //     alignItems:"center",
    //     flexDirection:"column",
        
    // },
    footerContainer:{
        width:"100%",
        backgroundColor:"grey",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginBottom:"30em"
    }
}))


const Footer = function({open,...props}){
    const classes = useStyles()
    return(
        <>
            <BodyWork/>
            <Box className={classes.footerContainer}>
                <Box className={classes.headingContainer}>
                    <span>
                        <p>Zonia</p>
                        <MdAddShoppingCart/>
                    </span>
                </Box>
                <Box className={classes.emailContainer}>
                    <h5>NEW TO ZONIA</h5>
                    <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                </Box>
                <Box>
                    <TextField Icon={MdAddShoppingCart} />
                </Box>
                <Box>
                    <span>
                    <MdAddShoppingCart/>
                    <h6>Download Zonia app for free</h6>
                    </span>
                </Box>
            </Box>
            </>
    )
}

export default Footer