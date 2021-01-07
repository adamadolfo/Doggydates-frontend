import react, {useState} from 'react';
import { Grid, TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import logo from '../logo.png'





function Welcome() {


    // react code
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [user, setUser] = useState({})


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
        console.log(owner)

        
        fetch("http://localhost:3001/owners", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(owner)
        })
        .then(r => r.json())
        .then(owner => console.log(owner))
        // set the state of the user
        // setUser(response.data)
        // // store the user in localStorage
        // localStorage.setItem('user', response.data)
        // console.log(response.data)

    };





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
                <Grid item className="MuiPaper-root MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8 MuiGrid-grid-md-5 MuiPaper-elevation6" style={{}}>
                    <div style={{textAlign: "center"}}>
                        <ThemeProvider theme={theme}>
                            <img src={logo} />
                            <div className="good" > Good dogs. Good people. </div>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div style={{fontSize: "1.25rem", margin: "10px", height: "100%"}}>Sign In</div>
                                <TextField style={styles} onChange={(e) => handleEmail(e)} value={email} id="outlined-basic" label="Email" variant="outlined" />
                                <TextField style={styles} onChange={(e) => handlePassword(e)} value={password} type="password" id="outlined-basic" label="Password" variant="outlined" />
                                <Button type="submit" style={{color: "white", width: "70%", margin: "10px", height: "50px", fontSize: "1.15rem"}} variant="contained" color="primary">Sign In</Button>
                            </form>
                            <Button style={{textTransform: 'none', marginTop: "5px", fontWeight: "150"}} id="signupbutton" color="secondary">Don't have an account? Sign Up</Button>
                        </ThemeProvider>
                    </div>  
                </Grid>
                
            </Grid>
           
            
        </div>
    );
  }
  
  export default Welcome;