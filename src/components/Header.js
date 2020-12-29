import react from "react"
import PetsIcon from '@material-ui/icons/Pets';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import { Grid } from '@material-ui/core';


const Header = () => {
    return(
    <div style={{display: "flex"}}>
        <Grid container justify = "center">
            <Grid item xs={4} style={{align: "center"}}>
                <AccountCircleIcon style={{fontSize: 75, color: "black", marginLeft: "100px"}}/>
            </Grid>
            <Grid item xs={4}>
                <PetsIcon style={{fontSize: 75, color: "orange", marginLeft: "100px"}} />
            </Grid>
            <Grid item xs={4}>
                <ChatIcon style={{fontSize: 75, color: "black"}} />
            </Grid>
        </Grid>
    </div>
    )
}







export default Header