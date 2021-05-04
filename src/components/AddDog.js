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
    const [image, setImage] = useState('')
    const [enjoys, setEnjoys] = useState('')
    const [dislikes, setDislikes] = useState('')
    const [getsAlongWith, setGetsAlongWith] = useState('')
    const [temperament, setTemperament] = useState('')
    const [dominateSubmissive, setDominateSubmissive] = useState('')
    const [leash, setLeash] = useState('')
    const [oneOnOneGroup, setOneOnOneGroup] = useState('')
    const [origin, setOrigin] = useState('')


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

    const handleImage = (e) => {
        setImage(e.target.value)
    }

    const handleEnjoys = (e) => {
        setEnjoys(e.target.value)
    }

    const handleDislikes = (e) => {
        setDislikes(e.target.value)
    }
    
    const handleGetsAlongWith = (e) => {
        setGetsAlongWith(e.target.value)
    }

    const handleTemperament = (e) => {
        setTemperament(e.target.value)
    }

    const handleDominateSubmissive = (e) => {
        setDominateSubmissive(e.target.value)
    }

    const handleLeash = (e) => {
        setLeash(e.target.value)
    }

    const handleOneOnOneGroup = (e) => {
        setOneOnOneGroup(e.target.value)
    }

    const handleOrigin = (e) => {
        setOrigin(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const currentUser = JSON.parse(localStorage.getItem("user"))
       
        const dogInfo = {
            name: name, 
            breed: breed, 
            gender: gender,
            gets_along_with: getsAlongWith,
            temperament: temperament,
            dominate_submissive: dominateSubmissive,
            leash: leash,
            one_on_one_group: oneOnOneGroup,
            enjoys: enjoys,
            dislikes: dislikes,
            adoped_breeder: origin,
            owner_id: currentUser.id,
            age: age
        }

        const response = await fetch("https://dogdates.herokuapp.com/dogs", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dogInfo)
        })

        const loggedInOwner = await response.json()
        localStorage.setItem('user', JSON.stringify(loggedInOwner)) 

        props.showProfile()

    }


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
        style={{marginTop: "3.75vh"}}
        >
            <Grid item
            >
                <Paper className="form-paper">
                    <ThemeProvider theme={theme}>
                    <h1>Add Dog</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                            <TextField onChange={(e) => handleName(e)} value={name} style={styles} id="outlined-basic" label="Name" variant="outlined" />
                            <TextField onChange={(e) => handleImage(e)} value={image} style={styles} id="outlined-basic" label="Image (URL)" variant="outlined" />
                            <TextField onChange={(e) => handleAge(e)} value={age} style={styles} id="outlined-basic" label="Age" variant="outlined" />
                            <FormControl variant="outlined">
                                <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">Gender</InputLabel>
                                    <Select
                                        style={{width: "100px", margin: "10px"}}
                                        native
                                        label="Gender"
                                        onChange={(e) => handleGender(e)}
                                        >
                                        <option aria-label="None" value=""/>
                                        <option value="Male"> Male </option>
                                        <option value="Female"> Female </option>
                                    </Select>
                            </FormControl>
                            <br/>
                            <TextField onChange={(e) => handleBreed(e)} value={breed} style={styles} id="outlined-basic" label="Breed" variant="outlined" />
                            <TextField onChange={(e) => handleEnjoys(e)} value={enjoys} style={styles} id="outlined-basic" label="Enjoys" variant="outlined" />
                            <TextField onChange={(e) => handleDislikes(e)} value={dislikes} style={styles} id="outlined-basic" label="Dislikes" variant="outlined" />
                            <TextField onChange={(e) => handleGetsAlongWith(e)} value={getsAlongWith} style={styles} id="outlined-basic" label="What does your dog look for in other dogs?" variant="outlined" />
                            <FormControl variant="outlined">
                                <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">Usual Temperament Around Others</InputLabel>
                                    <Select
                                        style={{width: "300px", margin: "10px"}}
                                        native
                                        label="Usual Temperament Around Others"
                                        onChange={(e) => handleTemperament(e)}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value="Playful"> Playful </option>
                                        <option value="Relaxed"> Relaxed </option>
                                        <option value="Confident"> Confident </option>
                                        <option value="Shy"> Shy </option>
                                        <option value="Afraid"> Afraid </option>
                                        <option value="Mischievous"> Mischievous </option>
                                        <option value="Aggresive"> Aggresive </option>
                                        <option value="Different Day Different Dog"> Different Day Different Dog </option>

                                    </Select>
                            </FormControl>

                            <FormControl variant="outlined">
                                <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">Dominate/Submissive</InputLabel>
                                    <Select
                                        style={{width: "200px", margin: "10px"}}
                                        native
                                        label="Dominate/Submissive"
                                        onChange={(e) => handleDominateSubmissive(e)}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value="Dominate"> Dominate </option>
                                        <option value="Submissive"> Submissive </option>
                                    </Select>
                            </FormControl>

                            <FormControl variant="outlined">
                                <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">Leash</InputLabel>
                                    <Select
                                        style={{width: "210px", margin: "10px"}}
                                        native
                                        label="Leash"
                                        onChange={(e) => handleLeash(e)}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value="Usually Leashed"> Usually Leashed </option>
                                        <option value="Usually Off The Leash"> Usually Off The Leash </option>
                                    </Select>
                            </FormControl>

                            <FormControl variant="outlined">
                                <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">One-on-One/Group</InputLabel>
                                    <Select
                                        style={{width: "200px", margin: "10px"}}
                                        native
                                        label="One-on-One/Group"
                                        onChange={(e) => handleOneOnOneGroup(e)}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value="One-on-One"> One-on-One date</option>
                                        <option value="Group Dates"> Group Dates </option>
                                        <option value="Both"> Both </option>
                                    </Select>
                            </FormControl>

                            <FormControl variant="outlined">
                                <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">Origin Story</InputLabel>
                                    <Select
                                        style={{width: "300px", margin: "10px"}}
                                        native
                                        label="Origin Story"
                                        onChange={(e) => handleOrigin(e)}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value="Adopted"> Adopted </option>
                                        <option value="Rescued"> Rescued </option>
                                        <option value="Breeder"> Breeder </option>
                                        <option value="Someone I Know"> Someone I Know </option>
                                        <option value="Other"> Other </option>

                                    </Select>
                            </FormControl>
                           
                            <Button type="submit" style={{color: "white", width: "96%", margin: "10px", height: "50px", fontSize: "1.15rem"}} variant="contained" color="primary">Add Dog</Button>
                        </form>
                </ThemeProvider>
                </Paper>
            </Grid>
        </Grid>
    )
}



export default AddDog
