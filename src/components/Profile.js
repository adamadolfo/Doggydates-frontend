import react, {useState, useEffect} from "react"

import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";


import EditUserForm from "./EditUserForm"
import Header from './Header'
import User from './User'
import Drawer from './Drawer'

import DogCard from './DogCard'
import { Grid } from '@material-ui/core';




const Profile = () => {

    const [profile, setProfile] = useState(true)
    const [drawer, setDrawer] = useState(false)
    

    const loggedInUser = JSON.parse(localStorage.getItem("user"))
    
    // useEffect(() => {
    
    // })
    
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



    return(
        <>
            <Header />
            { drawer ? <Drawer logout={logout} showDrawer={showDrawer} editProfile={editProfile} /> : <MenuIcon onClick={showDrawer} style={{fontSize: "3rem", cursor: "pointer"}}/> }
   
            { profile ? <User owner={loggedInUser} /> : <EditUserForm /> }
        </>
    )
}







export default Profile
