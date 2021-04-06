import react from "react"
import Header from './Header'

import MenuIcon from '@material-ui/icons/Menu';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import PetsIcon from '@material-ui/icons/Pets';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Grid } from '@material-ui/core';


const Drawer = (props) => {
    return(
        // add border radius and some texture to each option. maybe a hover effect
        <Grid container direction="row" spacing={4} className="drawer" >
            <Grid item className="menu-option" onClick={props.showProfile}> <AccountCircleIcon style={{fontSize: "2rem"}}/> Profile  </Grid>
            <Grid item className="menu-option" onClick={props.editProfile}> <EditIcon style={{fontSize: "2rem"}}/> Edit Profile  </Grid>
            <Grid item className="menu-option" onClick={props.addNewDog}> <AddCircleRoundedIcon style={{fontSize: "2rem"}} /> Add Dog </Grid>
            <Grid item className="menu-option" onClick={props.editDog}> <PetsIcon style={{fontSize: "2rem"}} /> Edit Dog </Grid>
            <Grid item className="menu-option" onClick={props.logout}> <ExitToAppRoundedIcon style={{fontSize: "2rem"}} /> Logout </Grid>
        </Grid>
    )
}







export default Drawer
