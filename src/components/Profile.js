import react, {useState} from "react"

import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";


import EditUserForm from "./EditUserForm"
import AddDog from './AddDog'
import EditDog from './EditDog'
import Header from './Header'
import User from './User'
import Drawer from './Drawer'

import DogCard from './DogCard'
import { Grid } from '@material-ui/core';




const Profile = () => {

    const [drawer, setDrawer] = useState(false)
    const [shown, setShown] = useState("profile")

    
    

    const loggedInUser = JSON.parse(localStorage.getItem("user"))

    
    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        history.push("/welcome")
    }
    
    const showDrawer = () => {
        setDrawer(!drawer)
    }

    const drawerHelper = () => {
        if (drawer) {
            return showDrawer()
         } else {
            return null
         }
    }

    const addNewDog = () => {
        setShown("newDog")
        drawerHelper()
    }

    const showProfile = () => {
        setShown("profile")
        drawerHelper()
    }


    const editProfile = () => {
        setShown("editProfile")
        drawerHelper()
    }

    const editDog = () => {
        setShown("editDog")
        drawerHelper()
    }

    const shownComponent = () => {
        switch (shown) {
            case "profile" :
                return <User owner={loggedInUser} /> 
            case "editProfile" :
                return <EditUserForm editProfile={editProfile}/>
            case "newDog" :
                return <AddDog showProfile={showProfile} addNewDog={addNewDog}/>
            case "editDog" :
                return  <EditDog />

        }
    }



    return(
        <>
            <Header />
            { drawer ? <Drawer logout={logout} showProfile={showProfile} showDrawer={showDrawer} editProfile={editProfile} addNewDog={addNewDog} editDog={editDog} /> : <MenuIcon onClick={showDrawer} style={{fontSize: "3rem", cursor: "pointer"}}/> }

            {shownComponent()}


            
        </>
    )
}







export default Profile
