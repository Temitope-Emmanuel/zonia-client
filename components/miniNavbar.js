import { makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link'
import {Box} from "@material-ui/core"

import {MdAddShoppingCart} from 'react-icons/md'
import {FaUserShield} from 'react-icons/fa'
import {GiFoodTruck} from 'react-icons/gi'
import {GiPartyFlags} from 'react-icons/gi'
import {yellow} from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      boxSizing:"border-box",
      flexDirection:"row",
      width:"60%",
      justifyContent:"flex-start",
      alignItems:"center",
      height:"3vh",
      backgroundColor:"white",
      overflow:"hidden",
      padding:".1em",
      [theme.breakpoints.down("sm")]:{
          width:"100%"
      }
    },
    hide: {
      display: 'none',
    },
    productContainer:{
        display:"flex",
        flexDirection:"row",
        flex:1,
        justifyContent:"center",
        "& > span":{
            margin:"0 1em",
            display:"flex",
            flexDirection:"row-reverse",
            justifyContent:"center",
            alignItems:"center",
            cursor:"pointer",
            transition:"color .2s ease-in",
            "& svg":{
                marginRight:".5em",
            },
            "&:hover":{
                color:yellow[900]
            }
        }
    }
  }));


const Navbar = function({open,handleDrawerOpen,...props}){
    const classes = useStyles()
    
    return(
    <Box className={classes.root}>
        <Toolbar>
          <h4>Sell on Zonia</h4>
        </Toolbar>
        <Box className={classes.productContainer}>
            <Link href="/about">
                <span>
                    <p>ZONIA</p>
                    <MdAddShoppingCart/>
                </span>
            </Link>
            <Link href="/">
                <span>
                    <p>PAY</p>
                    <FaUserShield/>
                </span>
            </Link>
            <Link href="/">
                <span>
                    <p>FOOD</p>
                    <GiFoodTruck/>
                </span>
            </Link>
            <Link href="/">
                <span>
                    <p>PARTY</p>
                    <GiPartyFlags/>
                </span>
            </Link>
        </Box>
        </Box>
    )
}

export default Navbar