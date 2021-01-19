import react, {useState} from 'react';
import { Grid, TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import logo from '../logo.png'
import SignUp from './SignUp'

import { useHistory } from "react-router-dom";





function Welcome() {


    // react code
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [signup, setSignup] = useState(false)

   const history = useHistory();


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async e => {
    
        e.preventDefault()
        const owner = { 
            email: email, 
            password: password
        };

        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(owner)
        })
        const loggedInOwner = await response.json()
        console.log(loggedInOwner);
        localStorage.setItem('user', JSON.stringify(loggedInOwner))
        history.push("/swipe");
        // localStorage.setItem('user', response.data)
        // console.log(response.data)

    };


    const showSignUp = () => {
        setSignup(!signup)
    }



    // material styling

    const styles = {
        margin: "10px",
        width: "70%"
    }
  
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: orange[500],
          },
          secondary: {
            main: '#141a1f',
          },
        },
      });



    return (
        <div className="welcome">
            <Grid 
            container
            spacing={0}
            direction="row"
            >
                <Grid className="MuiGrid-root rob MuiGrid-item MuiGrid-grid-sm-4 MuiGrid-grid-md-7" item>
                
                        
                </Grid>
                <Grid item className="MuiPaper-root MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8 MuiGrid-grid-md-5 MuiPaper-elevation6" style={{backgroundColor: "white"}}>
                    <div style={{textAlign: "center"}}>
                        <ThemeProvider theme={theme}>
                            {!signup ? <> 
                            <img src={logo} />
                            <div className="good" > Good dogs. Good people. </div>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div style={{fontSize: "1.25rem", margin: "10px", height: "100%"}}>Sign In</div>
                                <TextField style={styles} onChange={(e) => handleEmail(e)} value={email} id="outlined-basic" label="Email" variant="outlined" />
                                <TextField style={styles} onChange={(e) => handlePassword(e)} value={password} type="password" id="outlined-basic" label="Password" variant="outlined" />
                                <Button type="submit" style={{color: "white", width: "70%", margin: "10px", height: "50px", fontSize: "1.15rem"}} variant="contained" color="primary">Sign In</Button>
                            </form>
                              <Button onClick={showSignUp} style={{textTransform: 'none', marginTop: "5px", fontWeight: "150"}} id="signupbutton" color="secondary">Don't have an account? Sign Up</Button>
                              </>
                               : 
                              <SignUp showSignUp={showSignUp}/> }
                        </ThemeProvider>
                    </div>  
                </Grid>
                
            </Grid>
           
            
        </div>
    );
  }
  
  export default Welcome;