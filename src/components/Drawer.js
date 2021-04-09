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
        <Grid container direction="row" spacing={4} className="drawer" >
            <Grid item className="menu-option" onClick={props.showProfile}> <AccountCircleIcon style={{fontSize: "2rem"}}/> <div>Profile</div>  </Grid>
            <Grid item className="menu-option" onClick={props.editProfile}> <EditIcon style={{fontSize: "2rem"}}/> <div>Edit Profile</div>  </Grid>
            <Grid item className="menu-option" onClick={props.addNewDog}> <AddCircleRoundedIcon style={{fontSize: "2rem"}} /> <div>Add Dog</div> </Grid>
            <Grid item className="menu-option" onClick={props.editDog}> <PetsIcon style={{fontSize: "2rem"}} /> <div>Edit Dog</div> </Grid>
            <Grid item className="menu-option" onClick={props.logout}> <ExitToAppRoundedIcon style={{fontSize: "2rem"}} /> <div>Logout</div> </Grid>
        </Grid>
    )
}







export default Drawer
