import react from 'react';
import { Grid } from '@material-ui/core';
import image from '../rob.jpg'

// import { Link } from 'react-router-dom';




function Welcome() {



    return (
        <div className="welcome">
            <Grid 
            container
            spacing={0}
            direction="row"
            style={{width: "100%"}}
            >
                <Grid item style={{width: "60%"}}>
                <img src={image} style={{width: "auto", height: "930px" }} />
                        
                </Grid>
                <Grid item>
               login login isn nsadojkgnaslkjdgbkasjdgfasdg
                        
                </Grid>
                
            </Grid>
           
            
        </div>
    );
  }
  
  export default Welcome;