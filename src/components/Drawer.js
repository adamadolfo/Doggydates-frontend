import react from "react"
import Header from './Header'

import MenuIcon from '@material-ui/icons/Menu';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import PetsIcon from '@material-ui/icons/Pets';


const Drawer = (props) => {
    return(
        // add border radius and some texture to each option. maybe a hover effect
        <div className="drawer" >
            <div style={{backgroundColor: "black", borderTopRightRadius: "10px"}}> 
                <MenuIcon onClick={props.showDrawer} style={{fontSize: "3rem", marginLeft: "80%", color: "white", cursor: "pointer"}} /> 
            </div>
            <div className="menu-option" onClick={props.editProfile}> <EditIcon style={{fontSize: "2rem"}}/> {props.profile ? "Edit Profile" : "Profile"} </div>
            <div className="menu-option" onClick={props.addNewDog}> <AddCircleRoundedIcon style={{fontSize: "2rem"}} /> Add Dog </div>
            <div className="menu-option" onClick={props.logout}> <PetsIcon style={{fontSize: "2rem"}} /> Edit Dog </div>
            <div className="menu-option" onClick={props.logout}> <ExitToAppRoundedIcon style={{fontSize: "2rem"}} /> Logout </div>
        </div>
    )
}







export default Drawer
