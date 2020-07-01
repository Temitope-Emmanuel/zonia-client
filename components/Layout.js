import Navbar from "./navbar"
import {makeStyles} from "@material-ui/core/styles"
import Snackbar from "./Snackbar"
import Footer from "./footer"

const useStyles = makeStyles(theme =>({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        width:"100%",
        marginTop:"1.8em"
    },    
}))

const Layout = function({children,...props}){
     
    const classes = useStyles()

    return(
        <>
        <Navbar/>
        <div className={classes.toolbar} />
        <div className={classes.content}>
        {children}
        </div>
        </>
    )
}


export default Layout