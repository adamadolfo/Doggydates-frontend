import react, {useState} from "react"

import MenuIcon from '@material-ui/icons/Menu';


import EditUserForm from "./EditUserForm"
import Header from './Header'
import User from './User'
import Drawer from './Drawer'



const Profile = () => {

    const [profile, setProfile] = useState(true)
    const [drawer, setDrawer] = useState(false)

    
    const showDrawer = () => {
        setDrawer(!drawer)
    }

    const editProfile = () => {
        setProfile(!profile)
        showDrawer()
    }


    return(
        <>
            <Header />
            { drawer ? <Drawer showDrawer={showDrawer} editProfile={editProfile} /> : <MenuIcon onClick={showDrawer} style={{fontSize: "3rem"}}/> }
   
            { profile ? <User /> : <EditUserForm /> }
        </>
    )
}







export default Profile
