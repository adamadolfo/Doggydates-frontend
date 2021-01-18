import react from "react"
import Header from './Header'

import MenuIcon from '@material-ui/icons/Menu';


const Drawer = (props) => {
    return(
        // add border radius and some texture to each option. maybe a hover effect
        <div style={{backgroundColor: "grey", minWidth: "300px", height: "90%", position: "absolute", zIndex: 2}}>
            <div style={{backgroundColor: "black"}}> 
                <MenuIcon onClick={props.showDrawer} style={{fontSize: "3rem", marginLeft: "80%", color: "white"}} /> 
            </div>
            <div onClick={props.editProfile}> Edit Profile </div>
        </div>
    )
}







export default Drawer
