import React, {useEffect, useState} from "react"
import { Paper, Button, Grid } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';

const NewMessageBox = () => {




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
        >
            <Grid item>
                <Paper className="new-message-paper" elevation={5} >
                    <form>
                        <h3> New Message </h3>
                        <textarea className="new-message-box" >

                        </textarea>
                    </form> 
                </Paper>
            </Grid>
        </Grid>
    )
}







export default NewMessageBox
