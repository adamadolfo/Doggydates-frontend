import react, {useState} from "react"

import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";


import EditUserForm from "./EditUserForm"
import Header from './Header'
import User from './User'
import Drawer from './Drawer'



const Profile = () => {

    const [profile, setProfile] = useState(true)
    const [drawer, setDrawer] = useState(false)
    const [user, setUser] = useState()


    
    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        history.push("/welcome")
    }
    
    const showDrawer = () => {
        setDrawer(!drawer)
    }

    const editProfile = () => {
        setProfile(!profile)
        showDrawer()
    }



    const loggedInUser = JSON.parse(localStorage.getItem("user"))
    
    
    return(
        <>
            <Header />
            { drawer ? <Drawer logout={logout} showDrawer={showDrawer} editProfile={editProfile} /> : <MenuIcon onClick={showDrawer} style={{fontSize: "3rem", cursor: "pointer"}}/> }
   
            { profile ? <User /> : <EditUserForm /> }
        </>
    )
}







export default Profile
