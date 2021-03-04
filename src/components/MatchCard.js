import React, {useEffect, useState} from "react"
import { Paper, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';

const MatchCard = (props) => {
const [options, setOptions] = useState(false)

    const showOptions = () => {
        setOptions(!options)
    }

    const sendMessage = (match) => {
        console.log(match.id)
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
        <div className="match-card">
            <img onClick={(e) => showOptions(e)} src={props.match.image_url} className='match-image' />
            {
                options ? 
                    <ThemeProvider theme={theme}>
                        <Paper elevation={8} className="match-options">
                            <Button className="option-button" onClick={() => sendMessage(props.match)} variant="outlined" color="primary">
                                send Message
                            </Button>
                            <Button className="option-button" variant="contained" color="primary"> View Profile </Button>
                        </Paper>
                    </ThemeProvider> : null

            }
        <div onClick={(e) => showOptions(e)} className="match-details">
            {props.match.email}
           </div>
        </div>
    )
}







export default MatchCard
