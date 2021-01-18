import react from "react"
import Header from './Header'

import MenuIcon from '@material-ui/icons/Menu';


const Drawer = () => {
    return(
        <div style={{backgroundColor: "white", minWidth: "300px", height: "90%", position: "absolute"}}>
            <div style={{backgroundColor: "grey"}}> 
                <MenuIcon style={{fontSize: "3rem", marginLeft: "80%"}} /> 
            </div>
        </div>
    )
}







export default Drawer
