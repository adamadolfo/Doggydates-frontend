import React, {useEffect, useState} from "react"
import { Paper, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';

const MatchCard = (props) => {


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
        <div className="match-card">
            <img onClick={(e) => props.showChat(props.match)} src={props.match.image_url} className='match-image' />
            <div onClick={(e) => props.showChat(props.match)} className="match-details">
                {props.match.email}
            </div>
        </div>
    )
}







export default MatchCard
