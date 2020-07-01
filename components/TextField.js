import {InputAdornment,FormControl,OutlinedInput} from "@material-ui/core"
import IconButton from '@material-ui/core/IconButton';
import {RiSearchEyeLine} from 'react-icons/ri'


const TextField = function({Icon,style,...props}){
    

    return(
           <FormControl style={{width:"100%",margin:"0 1em"}}>
                <OutlinedInput
                fullWidth
                style={{borderRadius:".5em"}}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton style={{margin:"2em 0"}}>
                  <Icon className={style}/>
                    </IconButton>
                  </InputAdornment>
                }
                    placeholder="Search Product, brands and categories"
                />
            </FormControl>
    )
}

export default TextField