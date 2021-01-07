import react from 'react';
import { Grid, TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
            main: '#f8bbd0',
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
                            <div style={{fontSize: "2rem"}}> Good dogs. Good people. </div>
                            <TextField style={styles} id="outlined-basic" label="Email" variant="outlined" />
                            <TextField style={styles} id="outlined-basic" label="Password" variant="outlined" />
                            
                        </ThemeProvider>
                    </div>  
                </Grid>
                
            </Grid>
           
            
        </div>
    );
  }
  
  export default Welcome;