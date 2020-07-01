import clsx from 'clsx'
import {useState} from 'react'
import {Box,Divider,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Layout from "../components/Layout"
import Input from "../components/Input"
import useInputState from "../lib/useInputState"
import {ADD_USER,LOGIN_USER} from "../lib/gql/mutation"
import {withApollo} from "../lib/apollo"
import {useMutation} from "@apollo/react-hooks"
import {blue} from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
    root:{
        height:"90vh",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        textAlign:"center",
        justifyContent:"center",
        "& > div":{
            height:"50vh",
            margin:"0 .5em",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            backgroundColor:"whitesmoke",
            borderRadius:".35em",
            transition:"transform .3s ease-in-out",
            "& h3":{
                fontSize:"2.3em",
                color:"black",
                fontWeight:"400",
                opacity:".8"
            },
            "& p":{
                "& button":{
                    transition:"transform .4s ease-in-out"
                },
                "&:hover":{
                    "& button":{
                        transform:"scale(1.1)",
                        marginLeft:"1.2em"
                    }
                }
            }
        }
    },
    LinkButton:{
        textTransform:"capitalize",
        padding:".01em .001em",
        textAlign:"left",
        margin:"0 !important",
    },
    scaleUp:{
        transform:"scale(1)",
        width:"65%",
        opacity:"1"
    },
    scaleDown:{
        transform:"scale(.3)",
        width:"35%",
        opacity:".5"
    },    
    bodyContainer:{
        width:"98%",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        transition:"transform .3s ease-in-out",
        "& button":{
            textTransform:"capitalize",
            padding:theme.spacing(1,1.5)
        }
    },
    formContainer:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        margin:theme.spacing(1,0)
    }
}))


const Login = function(props){
    const [email,setEmail,resetEmail] = useInputState("")
    const [username,setUsername,resetUsername] = useInputState("")
    const [password,setPassword,resetPassword] = useInputState("")
    
    const [signup] = useMutation(ADD_USER,
        {variables:{
            name:username,
            password,
            email,
            profileImg:"http://unsplash.it"
        },
        ignoreResults:false
    })

    const [login,data] = useMutation(LOGIN_USER)

    const classes = useStyles()
    
    const [isTrue,setTrue] = useState(false) 
    const [index,setIndex] = useState(0)

    const alert = {
        status:"Success",
        message:"Log in was sucessful"
    }

    const handlePress = (e) => {
        if(e.which === 13){
            setIndex(index+1)
            if(index >2){
                handleSubmit()
            }
        } 
    }
    
    const resetInput = () => {
        resetEmail()
        resetUsername()
        resetPassword()
        setIndex(0)
    }

    const handleToggle = () => {
        resetInput()
        setTrue(!isTrue)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        isTrue ? signup() : login(
            {variables:{
            email,
            password
        }})
        resetInput()
    }
    return(
        <Layout alert={alert}>
            <Box className={classes.root}>
            <Box  className={
                    clsx({
                        [classes.scaleUp]:isTrue,
                        [classes.scaleDown]:!isTrue
                    })
                }>
                <h3>Sign up</h3>
                <Box className={classes.bodyContainer}>
                    <Input label="Email" focused={index === 0} 
                     disabled={!isTrue} type="email"
                     handlePress={handlePress}
                     placeholder="Please Input Your Email"
                     value={email} handleChange={setEmail} 
                    />
                    <Box className={classes.formContainer}>
                    <Input style={{width:"50%"}} label="Username" 
                    focused={index === 1}
                     placeholder="Please Input a username" disabled={!isTrue}
                     value={username} handleChange={setUsername} type="text" 
                     handlePress={handlePress}
                    />
                    <Input style={{width:"50%"}} label="Password" focused={index === 2}
                     placeholder="Create a Password" type="password" 
                     value={password} handleChange={setPassword} 
                     disabled={!isTrue} handlePress={handlePress}
                    />
                    </Box>
                    <Button style={{
                        backgroundColor:blue[300],
                        color:blue[800]
                    }} onClick={handleSubmit} type="submit">SUBMIT</Button>
                </Box>
                <p>Already have an account ? login<Button className={classes.LinkButton} disabled={!isTrue} onClick={handleToggle}>here</Button></p>
            </Box>
            <Divider orientation="vertical" flexItem/>
            <Box  className={
                    clsx({
                        [classes.scaleUp]:!isTrue,
                        [classes.scaleDown]:isTrue
                    })
                }>
                <h3>Login</h3>
                <form onSubmit={handleSubmit} className={classes.bodyContainer}>
                    <Input label="Email" disabled={isTrue}
                     placeholder="Please Input Your Email" type="email"
                     value={email} handleChange={setEmail} handlePress={handlePress}
                    />
                    <Input label="Password" disabled={isTrue}
                     placeholder="Create a Password" type="password"
                     value={password} handleChange={setPassword} handlePress={handlePress}
                    />
                    <Button style={{
                        backgroundColor:blue[100],
                        color:blue[500]
                    }} onClick={handleSubmit} type="submit">SUBMIT</Button>
                </form>
                <p>Don't Have an account ? Sign up
                    <Button className={classes.LinkButton} disabled={isTrue}
                     onClick={handleToggle}>here
                     </Button>
                </p>
            </Box>
            </Box>
        </Layout>
    )
}

export default withApollo({ssr:true})(Login)