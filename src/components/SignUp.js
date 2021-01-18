import react, {useState} from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { useHistory } from "react-router-dom";






function SignUp(props) {


    // react code
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [passwordConfirm, setPasswordConfirm] = useState("")
   const [user, setUser] = useState()

   const history = useHistory();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value)
    }

    const handleSubmit = async e => {

        e.preventDefault()

        if (password === passwordConfirm) {
            const owner = { 
                email: email, 
                password: password
            };
            console.log(owner)
            const response = await fetch("http://localhost:3001/owners", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(owner)
            })
            const loggedInOwner = await response.json()
            setUser(loggedInOwner)
            localStorage.setItem('user', JSON.stringify(user))
            history.push("/swipe");
        } else {
            alert("Passwords do not match")
        }

        

    };

    // styling

    const styles = {
        margin: "10px",
        width: "70%"
    }

    return (
        <div style={{marginTop: "30%"}}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div style={{fontSize: "1.25rem", margin: "10px", height: "100%"}}>Sign Up</div>
                <TextField style={styles} onChange={(e) => handleEmail(e)} value={email} id="outlined-basic" label="Email" variant="outlined" />
                <TextField style={styles} onChange={(e) => handlePassword(e)} value={password} type="password" id="outlined-basic" label="Password" variant="outlined" />
                <TextField style={styles} onChange={(e) => handlePasswordConfirm(e)} value={passwordConfirm} type="password" id="outlined-basic" label="Confirm Password" variant="outlined" />
                <Button type="submit" style={{color: "white", width: "70%", margin: "10px", height: "50px", fontSize: "1.15rem"}} variant="contained" color="primary">Create Account</Button>
            </form>
            <Button onClick={props.showSignUp} style={{textTransform: 'none', marginTop: "5px", fontWeight: "150"}} id="signupbutton" color="secondary">Back To Login</Button>
        </div>
    );
  }
  
  export default SignUp;