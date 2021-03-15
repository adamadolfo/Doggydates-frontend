import React, {useEffect, useState} from "react"
import { Paper, Button, Grid } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import Header from "./Header";

const Messaging = (props) => {

  const [typedMessage, setTypedMessage] = useState()

  const fillMessage = (e) => {
    setTypedMessage(e.target.value)
  } 


  debugger

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
              style={{width: "90%"}} 
              justify="center"
              alignItems="center"
              >
                <Button onClick={props.changeTheScreen} > back </Button>
                 <div className="message-display">
                   {props.convo[1][1].map(message => <p> {message} </p>) }    
                 </div>
            </Grid>
            <Grid item
              style={{width: "90%"}} 
              justify="center"
              alignItems="center"
              >
                    <form onSubmit={(e) => props.postMessage(e, typedMessage)} style={{width: "99%"}}>
                      <div className="textarea-container">
                        <textarea onChange={(e) => fillMessage(e)} className="new-message-box" >
                        
                        </textarea>
                        
                        <button type="submit"> send </button>
                      </div>
                    </form> 
            </Grid>
        </Grid>
    )
}







export default Messaging
