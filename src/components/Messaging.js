import React, {useEffect, useState} from "react"
import { Paper, Button, Grid } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import Header from "./Header";
import userEvent from "@testing-library/user-event";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Messaging = (props) => {

  const [typedMessage, setTypedMessage] = useState()

  useEffect(() => {

  }, [])

  const fillMessage = (e) => {
    setTypedMessage(e.target.value)
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

    return(
        <Grid 
            container
            justify="center"
            direction="row" 
            style={{width: "100%"}}
        >
            <Grid item
              style={{width: "100%"}} 
              >
                <ArrowBackIosIcon style={{fontSize: "3rem", margin: "2vh", cursor: "pointer"}} onClick={props.changeTheScreen} />
                 <Grid container direction="row" className="message-display">
                   {
                    props.convo !== undefined ? 
          
                   props.convo[0].messages.map(message => {
                    if (message.owner_id == props.user.id) {
                      return <Grid 
                        item xs={12} 
                        >
                          <div className="user-message" > {message.body} </div>
                      </Grid>
                    } else {
                      return <Grid xs={12} item>
                      <p className="other-message" > {message.body} </p>
                    </Grid>
                    }

                   })
                   : null
                   
                   
                   }
                 </Grid>
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
