import react, {useState} from "react"

import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";


import EditUserForm from "./EditUserForm"
import AddDog from './AddDog'
import Header from './Header'
import User from './User'
import Drawer from './Drawer'

import DogCard from './DogCard'
import { Grid } from '@material-ui/core';




const Profile = () => {

    const [profile, setProfile] = useState(true)
    const [drawer, setDrawer] = useState(false)
    const [addDog, setAddDog] = useState(false)
    

    const loggedInUser = JSON.parse(localStorage.getItem("user"))

    
    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        history.push("/welcome")
    }
    
    const showDrawer = () => {
        setDrawer(!drawer)
    }

    const addNewDog = () => {
        setAddDog(!addDog)
    }


    const editProfile = () => {
        setProfile(!profile)
        if (drawer) {
           return showDrawer()
        } else {
           return null
        }
    }



    return(
        <>
            <Header />
            { drawer ? <Drawer logout={logout} showDrawer={showDrawer} editProfile={editProfile} profile={profile} /> : <MenuIcon onClick={showDrawer} style={{fontSize: "3rem", cursor: "pointer"}}/> }

           
            { profile ? <User owner={loggedInUser} /> : <EditUserForm editProfile={editProfile}/> }

            { addDog ? <AddDog addNewDog={addNewDog}/> : null }


            
        </>
    )
}







export default Profile
