import react, {useState} from "react"
import { Grid, TextField, Paper, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';





const AddDog = (props) => {

    //react code
    const [name, setName] = useState('')
    const [age, setAge] = useState()
    const [breed, setBreed] = useState('')
    const [gender, setGender] = useState('')
    // const [image, setImage] = useState('')
    // const [experience, setExperience] = useState('')
    // const [willingToTravel, setWillingToTravel] = useState('')
    // const [friendship, setFriendship] = useState('')
    // const [agePref, setAgePref] = useState('')
    // const [genderPref, setGenderPref] = useState('')
    // const [activities, setActivities] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleAge = (e) => {
        setAge(e.target.value)
    }

    const handleBreed = (e) => {
        setBreed(e.target.value)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    // const handleImage = (e) => {
    //     setImage(e.target.value)
    // }

    // const handleExperience = (e) => {
    //     setExperience(e.target.value)
    // }

    // const handleWillingToTravel = (e) => {
    //     setWillingToTravel(e.target.value)
    // }
    
    // const handleFriendship = (e) => {
    //     setFriendship(e.target.value)
    // }

    // const handleAgePref = (e) => {
    //     setAgePref(e.target.value)
    // }

    // const handleGenderPref = (e) => {
    //     setGenderPref(e.target.value)
    // }

    // const handleActivities = (e) => {
    //     setActivities(e.target.value)
    // }

    // const handleSubmit = async e => {
    //     e.preventDefault()
    //     const currentUser = JSON.parse(localStorage.getItem("user"))
       
    //     const userInfo = {
    //         id: currentUser.id,
    //         name: name,
    //         age: parseInt(age),
    //         age_preference: agePref,
    //         friendship_type: friendship,
    //         owner_experience: experience,
    //         gender_preference: genderPref,
    //         looking_for: activities,
    //         city: city,
    //         state: state,
    //         willing_mile_radius: willingToTravel,
    //         image_url: image
    //     }

    //     const response = await fetch(`http://localhost:3001/owners/${currentUser.id}`, {
    //         method: "PATCH",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(userInfo)
    //     })

    //     const loggedInOwner = await response.json()
    //     loggedInOwner.status == "fail" ? alert("nope") : localStorage.setItem('user', JSON.stringify(loggedInOwner)) 

    //     props.editProfile()

    // }


    //styling
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
        <Grid 
        container
        justify="center"
        direction="row"
        >
            <Grid item
            >
                <Paper className="form-paper">
                    <ThemeProvider theme={theme}>
                    <h1>Add Dog</h1>
                    {/* <form onSubmit={(e) => handleSubmit(e)}> */}
                    <form>
            
                            <TextField onChange={(e) => handleName(e)} value={name} style={styles} id="outlined-basic" label="Name" variant="outlined" />
                            <TextField onChange={(e) => handleAge(e)} value={age} style={styles} id="outlined-basic" label="Age" variant="outlined" />
                            {/* <TextField style={styles} type="email" id="outlined-basic" label="Email" variant="outlined" />
                            <TextField style={styles} type="password" id="outlined-basic" label="Password" variant="outlined" /> */}
                            <TextField onChange={(e) => handleBreed(e)} value={breed} style={styles} id="outlined-basic" label="Breed" variant="outlined" />
                            <FormControl variant="outlined">
                                <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">Gender</InputLabel>
                                    <Select
                                        style={{width: "85px", margin: "10px"}}
                                        native
                                        label="Gender"
                                        onChange={(e) => handleGender(e)}
                                        >
                                        <option aria-label="None" value=""/>
                                        <option value="male"> Male </option>
                                        <option value="male"> Female </option>
                                    </Select>
                            </FormControl>
                            {/* <TextField onChange={(e) => handleImage(e)} value={image} style={styles} id="outlined-basic" label="Image (URL)" variant="outlined" />
                            <TextField onChange={(e) => handleExperience(e)} value={experience} style={styles} id="outlined-basic" label="Owner Experience" variant="outlined" />
                            <FormControl variant="outlined">
                                <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">Willing to travel</InputLabel>
                                    <Select
                                        style={{width: "160px", margin: "10px"}}
                                        native
                                        label="Willing to travel"
                                        onChange={(e) => handleWillingToTravel(e)}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value="0-10 Miles"> 0-10 Miles </option>
                                        <option value="10-25 Miles"> 10-25 Miles </option>
                                        <option value="25-50 Miles"> 25-50 Miles </option>
                                        <option value="50-100 Miles"> 50-100 Miles </option>
                                        <option value="over 100 Miles"> Over 100 Miles </option>
                                    </Select>
                            </FormControl>
                            <h1>Intentions</h1>
                            <FormControl variant="outlined">
                                <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">Friendship Type</InputLabel>
                                    <Select
                                        style={{width: "200px", margin: "10px"}}
                                        native
                                        label="Friendship Type"
                                        onChange={(e) => handleFriendship(e)}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value="friendship"> Friendship </option>
                                        <option value="someone special"> Someone Special </option>
                                        <option value="Strictly Dog Related"> Strictly Dog Related </option>
                                        <option value="Didn't Think About It"> Didn't Think About It </option>
                                    </Select>
                            </FormControl>
                        
                            <FormControl variant="outlined">
                                <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">Age Preference</InputLabel>
                                    <Select
                                        style={{width: "200px", margin: "10px"}}
                                        native
                                        label="Age Preference"
                                        onChange={(e) => handleAgePref(e)}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value="18-25"> 18-25 </option>
                                        <option value="26-33"> 26-33 </option>
                                        <option value="33-40"> 33-40 </option>
                                        <option value="40-54"> 40-54 </option>
                                        <option value="55 and over"> 55 And Over </option>
                                        <option value="Age Is Just A Number"> Age Is Just A Number </option>
                                    </Select>
                            </FormControl>

                            <FormControl variant="outlined">
                                <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">Gender Preference</InputLabel>
                                    <Select
                                        style={{width: "200px", margin: "10px"}}
                                        native
                                        label="Gender Preference"
                                        onChange={(e) => handleGenderPref(e)}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value="Male"> Male </option>
                                        <option value="Female"> Female </option>
                                        <option value="Anyone"> Anyone </option>
                                    </Select>
                            </FormControl> */}
                            {/* <textarea onChange={(e) => handleActivities(e)} value={activities} style={{minHeight: "100px", minWidth: "300px"}} placeholder="What activities are you most looking forward to with your dog(s) and meetups"/> */}
                            {/* <Button type="submit" style={{color: "white", width: "96%", margin: "10px", height: "50px", fontSize: "1.15rem"}} variant="contained" color="primary">Edit</Button> */}
                        </form>
                </ThemeProvider>
                </Paper>
            </Grid>
        </Grid>
    )
}



export default AddDog
