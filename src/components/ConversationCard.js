import React, {useEffect, useState} from "react"
import { Paper, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';

const ConversationCard = (props) => {


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
        <div>
            <img src={props.conversation.image_url} className='match-image' />
    
        <div >
            {props.conversation.email}
           </div>
        </div>
    )
}







export default ConversationCard