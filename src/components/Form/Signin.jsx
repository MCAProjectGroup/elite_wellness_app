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
          <Typography style={{textAlign:"center",marginTop:"30px"}}><h2>Login</h2> </Typography>
            <Grid>
            <Grid>
      <form>
        <label>Email or Phone</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <input type="button" value="Login" />
      </form>
      </Grid>
      <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <p class="para-2">
              <Grid item xs>
              Not a member?
                <Link href="#" variant="body2">
                Signup now
                </Link>
              </Grid>
              </p>
     </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default Signup