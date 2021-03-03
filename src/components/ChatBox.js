import React, {useState} from 'react';
import { Grid, TextField, Paper, Button } from '@material-ui/core';
// import { TextField } from '@material-ui/core';
// import Button from '@material-ui/core/Button';








function ChatBox(props) {


    


    return (
        
        <Grid container 
            justify="center"
            direction="row" 
            style={{backgroundColor: "white", height: "40vh"}} 
        >
           <Grid item>
                {props.messages.count > 0 ? props.messages.map(message => <div> {message}</div>) : null}
            </Grid>
        </Grid>
        
    );
  }
  
  export default ChatBox;