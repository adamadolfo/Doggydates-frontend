import react from "react"
import Header from './Header'

import MenuIcon from '@material-ui/icons/Menu';


const Drawer = (props) => {
    return(
        // add border radius and some texture to each option. maybe a hover effect
        <div className="drawer" >
            <div style={{backgroundColor: "black", borderTopRightRadius: "10px"}}> 
                <MenuIcon onClick={props.showDrawer} style={{fontSize: "3rem", marginLeft: "80%", color: "white", cursor: "pointer"}} /> 
            </div>
            <div className="menu-option" onClick={props.editProfile}> Edit Profile </div>
            <div className="menu-option" onClick={props.logout}> Logout </div>
        </div>
    )
}







export default Drawer
