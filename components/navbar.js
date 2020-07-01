import { makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {useRouter} from 'next/router'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Box,Button,Divider,MenuItem} from "@material-ui/core"
import Menu from "./Menu"
import MiniNavbar from './miniNavbar'
import Link from 'next/link'
import TextField from "./TextField"

import {TiThMenuOutline} from 'react-icons/ti';
import {FaUserAlt} from 'react-icons/fa'
import {FaQuestionCircle} from 'react-icons/fa'
import {MdAddShoppingCart} from 'react-icons/md'
import {IoIosArrowDown} from 'react-icons/io'
import {RiSearchEyeLine} from 'react-icons/ri'
import {AiOutlineInbox} from 'react-icons/ai'
import {RiHeartsLine} from 'react-icons/ri'
import {yellow} from "@material-ui/core/colors"


const drawerWidth = process.env.drawerWidth || 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      boxSizing:"border-box",
      flexDirection:"row",
      width:"100%",
      marginTop:".15em",
      alignItems:"center",
      "& a":{
        color:"black",
        textDecoration:"none",
        fontSize:"1.7em",
        letterSpacing:".1em"
      }
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor:"#eee",
      color:"black",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"space-between",
      height:"auto",
      padding:theme.spacing(.5,.3)
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    appContainer:{
        flex:"1",
        display:"flex",
        alignItems:"center",
        color:"black !important",
        justifyContent:"space-between",
        "& > div":{
            display:"flex",
            flexDirection:"row"
        },
        "& button":{
            margin:theme.spacing(.5,1),
            padding:theme.spacing(1,1.9),
            "& svg":{
                marginRight:theme.spacing(1.5),
                fontSize:'1.5em'
            }
        }
    },
    menuContainer:{
      display:"flex",
      alignItems:"center",
      flexDirection:"column",
      "& > span":{
        position:"relative",
        display:"inline-block",
        opacity:".8",
        fontSize:"1.2em",
        width:"100%",
        textAlign:"center",
        "&:before,&:after":{
          content:"''",
          height:"3px",
          width:"100%",
          backgroundColor:"rgba(0,0,0,.3)",
          display:"block",
          position:"absolute"
        }
      }
    },
    dropDownContainer:{
      textAlign:"center !important",
      "& > button":{
        textTransform:"capitalize",
       "&:hover":{
         color:yellow[900]
       },
       "& svg":{
         margin:theme.spacing(0,1),
         transition:"all .3s linear",
         fontSize:"2em",
        },
         "&:hover":{
           "& svg":{
             transform:"rotate(360deg)"
           }
        }
      }
    },
    normalItems:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"start",
      width:"100%",
      margin:theme.spacing(1,0),
      transition:"all .4s linear",
      color:"rgba(0,0,0,.8)",
      "& svg":{
        marginRight:"1em",
        fontSize:"1.5em"
      },
      "&:hover":{
        fontWeight:500,
        transform:"scale(1.2)",
        color:"rgba(0,0,0,1)",
        padding:theme.spacing(1,3)
      }
    },
    iconStyle:{
      backgroundColor:"rgba(0,0,0,.5)",
      color:"whitesmoke",
      borderRadius:"25%",
      fontSize:"1.3em",
     },
     searchContainer:{
       flex:1,
       padding:theme.spacing(.5,0),
       "& div":{
         [theme.breakpoints.down("sm")]:{
          display: 'none !important'
        }
       }
     }
  }));
  
const FAQ = [
  "Help Center",
  "How To Shop on Zonia?",
  "How To Pay On Zonia?",
  "How to use a Voucher?",
  "Delivery Timelines and Fees",
  "Jumia Express",
  "Jumia Pickup Station",
  "Return and Refunds",
  "Product ratings and reviews",
  "Contact Us"
]



const Navbar = function({open,handleDrawerOpen,...props}){
    const classes = useStyles()
    const router = useRouter()

    const [anchorUserEl, setAnchorUserEl] = React.useState(null);
    const [anchorHelpEl, setAnchorHelpEl] = React.useState(null);

    const handleClick = (func,event) => {
      func(event.currentTarget);
    };

    const handleClose = (func) => {
      func(null);
    };

    const handleSpanClick = (e) => {
      e.stopPropagation()
    }

    const isIndex = router.route === '/' ? true :false

    return(
        <AppBar
        elevation={0}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <MiniNavbar/>
        <Box className={classes.root}>
        <Toolbar>
          {isIndex &&
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <TiThMenuOutline />
          </IconButton>
          }
          <Link href="/">
            <a>Zonia</a>
          </Link>
        </Toolbar>
        <Box className={classes.appContainer}>
          <Box className={classes.searchContainer}>
            <TextField Icon={RiSearchEyeLine} style={classes.iconStyle} />
          </Box>
            <Box className={classes.dropDownContainer}>
                <Button 
                 style={{backgroundColor:"rgba(255,255,255,.7)"}} 
                 aria-controls="user-menu" aria-haspopup="true" 
                 onClick={(e) =>(handleClick(setAnchorUserEl,e))}>
                    <FaUserAlt/>                    
                    <span>LOGIN</span>
                    <IoIosArrowDown/>
                </Button>
                <Menu anchorEl={anchorUserEl} handleClose={(e) =>(handleClose(setAnchorUserEl))}>
                  <Box onClick ={handleSpanClick} className={classes.menuContainer}>
                    <Link href="/login">
                  <MenuItem 
                   style={{
                     padding:".5em 3.2em",
                     backgroundColor:yellow[800],
                     fontWeight:"500",
                     fontSize:"1.3em",
                     margin:"1.5em 0",
                     borderRadius:".35em",
                     boxShadow:"2px 8px 10px 5px rgba(0,0,0,.4)"
                    }}
                     >
                       LOGIN
                       </MenuItem>
                       </Link>
                    <span>OR</span>
                    <Link href="/">
                        <MenuItem 
                          style={{color:yellow[800],fontWeight:"500",fontSize:"1.2em"}}>
                            CREATE AN ACCOUNT
                        </MenuItem>
                    </Link>
                  <Divider flexItem />
                  <MenuItem className={classes.normalItems}>
                  <FaUserAlt/>
                  <span>Account</span>
                  </MenuItem>
                  <MenuItem className={classes.normalItems}>
                  <AiOutlineInbox/>
                  <span>Orders</span>
                  </MenuItem>
                  <MenuItem  className={classes.normalItems}>
                  <RiHeartsLine/>
                  <span>Saved Items</span>
                  </MenuItem>
                  </Box>
                </Menu>
                <Button aria-controls="help-menu" aria-haspopup="true" onClick={(e)=>(handleClick(setAnchorHelpEl,e))}>
                    <FaQuestionCircle/>
                    <span>Help</span>
                    <IoIosArrowDown/>
                </Button>
                <Menu anchorEl={anchorHelpEl} handleClose={(e)=>(handleClose(setAnchorHelpEl))}>
                  {FAQ.map((m,idx) => (
                    <MenuItem style={{margin:".9em .5em"}} key={idx}>{m}</MenuItem>
                  ))}
                </Menu>
                <Button>
                    <MdAddShoppingCart/>
                    <span>Cart</span>
                </Button>
            </Box>
        </Box>
        </Box>
      </AppBar>
    )
}

export default Navbar