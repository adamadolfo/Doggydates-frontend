import React, {useEffect, useState} from "react"
import { Paper, Button, Grid } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import Header from "./Header";

const NewMessageBox = (props) => {




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

    return(
        <Grid 
            container
            justify="center"
            direction="row" 
            style={{width: "90%"}}
        >
            <Grid item
              style={{width: "90%", backgroundColor: "red"}} 
              justify="center"
              alignItems="center"
              >
                 <div style={{backgroundColor: "white", height: "100vh"}}>    
                 </div>
            </Grid>
            <Grid item
              style={{width: "90%"}} 
              justify="center"
              alignItems="center"
              >
                    <form onSubmit={(e) => props.postMessage(e)} style={{width: "99%"}}>
                      <div className="textarea-container">
                        <textarea className="new-message-box" >
                        
                        </textarea>
                        
                        <button type="submit"> send </button>
                      </div>
                    </form> 
            </Grid>
        </Grid>
    )
}







export default NewMessageBox
