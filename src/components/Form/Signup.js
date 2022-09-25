import React from 'react'
import Card from '@mui/material/Card';
import { CardContent, Typography,Container ,Grid, Link} from '@mui/material';
import { height } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import './Signup.css'

function Signup() {
  return (
    <div>
      <Card variant="fullfilled" style={{maxWidth:"393px" , width:"90%", height:"609px",backgroundColor:"#FFFFFF", margin:"0 auto" ,marginTop:"20px",position:"relative" }}>
       <div  style={{position:"absolute", right: "1rem", top :"1rem"}} >
       <CloseIcon />
       </div>
        <CardContent>
          <Typography style={{textAlign:"center",marginTop:"30px"}}><h2>Sign Up</h2> </Typography>
            
      <form>
        {[{
          name:"Full Name",
          
        },
        {
          name:"Phone",
          
        },
        {
          name:"Email",
          
        },
        {
          name:"Password",
          type:"password"
          
        },
        {
          name:"Confirm Password",
          type:"password"
        }
        ].map((item, index)=>(
        <div>
          <label>{item.name}</label>
          <input type={item.type || "text"} placeholder="" />
        </div>
        ))
        }
        
        
       
        <input type="button" value="Submit" />
      </form>
      <p class="para-2">
              <Grid item xs>
              Already have an account?
                <Link href="#" variant="body2">
                Login
                </Link>
              </Grid>
              </p>
        
        </CardContent>

      </Card>
    </div>
  )
}

export default Signup