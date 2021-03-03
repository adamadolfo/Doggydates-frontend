import React, {useEffect, useState} from "react"
import { Paper, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import { Profiler } from "react";
import { Grid } from '@material-ui/core';

const ConversationCard = (props) => {

    const [profile, setProfile] = useState(props.conversation[0])
    const [messages, setMessages] = useState(props.conversation[1])
    


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
        <ThemeProvider theme={theme} >
          {messages.count > 0 ? 
            <Grid 
                container
                direction="row"
                className="chat-hub"
                spacing={2}
            >
                <Grid item xs={3} >
                    <img src={profile.image_url} className='chat-image' />
                </Grid>
                <Grid item xs={7}>
                    <div style={{color: theme.palette.primary.main, fontSize: "3vh", marginLeft: "2vh", marginTop: "1vh"}}> {profile.email} </div>
                    <div className="message-preview"> this is where message preview should go ...</div>
                </Grid>
            </Grid>
          : null}
        </ThemeProvider>
    )
}







export default ConversationCard