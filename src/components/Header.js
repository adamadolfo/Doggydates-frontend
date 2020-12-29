import react from "react"
import { Link } from 'react-router-dom';
import PetsIcon from '@material-ui/icons/Pets';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import { Grid, IconButton } from '@material-ui/core';


const Header = () => {
    return(
    <div style={{display: "flex"}}>
        <Grid 
        container
        spacing={0}
        align="center"
        justify="center"
        direction="row"
        >
            <Grid item xs={4}>
                <Link to='/profile' style={{ textDecoration: 'none' }}>
                    <IconButton>
                        <AccountCircleIcon style={{fontSize: "75px", color: "black", }}/>
                    </IconButton>
                </Link>
            </Grid>
            <Grid item xs={4}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <IconButton>
                        <PetsIcon style={{fontSize: "75px", color: "orange"}} />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item xs={4}>
                <Link to='/matches' style={{ textDecoration: 'none' }}>
                    <IconButton>
                        <ChatIcon style={{fontSize: "75px", color: "black"}} />
                    </IconButton>
                </Link>
            </Grid>
        </Grid>
    </div>
    )
}







export default Header