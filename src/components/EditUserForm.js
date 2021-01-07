import react from "react"
import { Grid, TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';





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
                <FormControl variant="outlined">
                    <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">State</InputLabel>
                        <Select
                            style={{width: "85px", margin: "10px"}}
                            native
                            label="State"
                            >
                            <option aria-label="None" value="" />
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DE">DE</option>
                            <option value="DC">DC</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="IA">IA</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="ME">ME</option>
                            <option value="MD">MD</option>
                            <option value="MA">MA</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MS">MS</option>
                            <option value="MO">MO</option>
                            <option value="MT">MT</option>
                            <option value="NE">NE</option>
                            <option value="NV">NV</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NY">NY</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WV">WV</option>
                            <option value="WI">WI</option>
                            <option value="WY">WY</option>
                        </Select>
                </FormControl>
                <TextField style={styles} id="outlined-basic" label="Image (URL)" variant="outlined" />
                <TextField style={styles} id="outlined-basic" label="Owner Experience" variant="outlined" />
                <FormControl variant="outlined">
                    <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">Willing to travel</InputLabel>
                        <Select
                            style={{width: "160px", margin: "10px"}}
                            native
                            label="Willing to travel"
                            >
                            <option aria-label="None" value="" />
                            <option value="0-10 miles"> 0-10 Miles </option>
                            <option value="10-25 miles"> 10-25 Miles </option>
                            <option value="25-50 miles"> 25-50 Miles </option>
                            <option value="50-100 miles"> 50-100 Miles </option>
                            <option value="over 100 miles"> Over 100 Miles </option>
                        </Select>
                </FormControl>
                <h1>Intentions</h1>
                <FormControl variant="outlined">
                    <InputLabel style={{padding: "10px"}} htmlFor="outlined-age-native-simple">Friendship Type</InputLabel>
                        <Select
                            style={{width: "200px", margin: "10px"}}
                            native
                            label="Friendship Type"
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
                            >
                            <option aria-label="None" value="" />
                            <option value="Male"> Male </option>
                            <option value="Female"> Female </option>
                            <option value="Anyone"> Anyone </option>
                        </Select>
                </FormControl>
                <textarea style={{minHeight: "100px", minWidth: "400px"}} placeholder="What activities are you most looking forward to with your dog(s) and meetups"/>
            </form>
    </ThemeProvider>
        </>
    )
}



export default EditUserForm
