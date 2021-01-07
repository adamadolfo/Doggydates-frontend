import react from 'react';
import { Grid, TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import logo from '../logo.png'





function Welcome() {


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
                            <div style={{fontSize: "1.25rem", margin: "10px", height: "100%"}}>Sign In</div>
                            <TextField style={styles} id="outlined-basic" label="Email" variant="outlined" />
                            <TextField style={styles} type="password" id="outlined-basic" label="Password" variant="outlined" />
                            <Button style={{color: "white", width: "70%", margin: "10px", height: "50px", fontSize: "1.15rem"}} variant="contained" color="primary">Sign In</Button>
                            <Button style={{textTransform: 'none', marginTop: "5px", fontWeight: "150"}} id="signupbutton" color="secondary">Don't have an account? Sign Up</Button>
                        </ThemeProvider>
                    </div>  
                </Grid>
                
            </Grid>
           
            
        </div>
    );
  }
  
  export default Welcome;