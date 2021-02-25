import React, {useEffect, useState} from "react"
import { Paper, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import { Profiler } from "react";

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
            <div className="chat-hub">
            <img src={profile.image_url} className='chat-image' />
            <div style={{color: theme.palette.primary.main}}> {profile.email} </div>
            </div>
        </ThemeProvider>
    )
}







export default ConversationCard