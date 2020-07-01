import {withStyles} from "@material-ui/core/styles"
import {Box} from "@material-ui/core"
import clsx from "clsx"

const useStyles = (props) => ({
    root:{
        backgroundColor:"white",
        zIndex:"1300",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        transition:"all .3s linear"
    },
    margin:{
        marginLeft:"15em",
        zIndex:"1100",
        backgroundColor:"transparent"
    }
})

const Wrapper = ({children,open,classes,...props}) => (
    <Box className={clsx(classes.root,{
        [classes.margin]:open
    })}>
        {children}
    </Box>
)

export default withStyles(useStyles)(Wrapper) 