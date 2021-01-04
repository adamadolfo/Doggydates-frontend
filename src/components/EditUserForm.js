import react from "react"
import Header from './Header'
import { Grid, TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import InputLabel from '@material-ui/core/InputLabel';

import NativeSelect from '@material-ui/core/NativeSelect';




const EditUserForm = () => {

    const styles = {
        margin: "10px",
        width: "40%"
    }
  
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: orange[500],
          },
          secondary: {
            main: '#f8bbd0',
          },
        },
      });
    

    return(
        <>
           <ThemeProvider theme={theme}>
           <h1>Edit Profile</h1>
           <form>
  
            <TextField style={styles} id="outlined-basic" label="Name" variant="outlined" />
            <TextField style={styles} id="outlined-basic" label="Age" variant="outlined" />
            <TextField style={styles} type="email" id="outlined-basic" label="Email" variant="outlined" />
            <TextField style={styles} type="password" id="outlined-basic" label="Password" variant="outlined" />
            <TextField style={styles} id="outlined-basic" label="City" variant="outlined" />
            </form>
    </ThemeProvider>
        </>
    )
}


// t.string "name"
// t.string "email"
// t.string "password_digest"
// t.integer "age"
// t.string "age_preference"
// t.string "friendship_type"
// t.string "owner_exp"
// t.string "gender_preference"
// t.string "looking_for"
// t.string "city"
// t.string "state"
// t.string "willing_mile_radius"
// t.string "image_url"




export default EditUserForm
