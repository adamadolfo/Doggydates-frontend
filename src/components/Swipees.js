import react from "react"
import DogCard from './DogCard'
import { Grid } from '@material-ui/core';


const Swipees = (props) => {
    let dogs = props.owner.dogs
    console.log(dogs)
    return(
        <>
            <Grid 
            container
            spacing={3}
            alignItems="center"
            justify="center"
            direction="row"
            
            >
              
                <Grid item style={{ maxWidth: "600px", backgroundColor: "white", borderRadius: "10px"}}>
                    <img src={props.owner.image_url} className="swipee" />
                    <div className="owner-name"> {props.owner.name} 
                        <div className="age"> {props.owner.age} </div>
                        <div className="city-state" >{props.owner.city}, {props.owner.state} </div>
                    </div>
                    <div className="prompt"> Experience as an owner? </div>
                    <div className="answer"> {props.owner.owner_exp} </div>
                    <div className="prompt"> What are you looking forward to doing with your dog(s) and friend?  </div>
                    <div className="answer"> {props.owner.looking_for} </div>
                    <div className="prompt"> Intentions? </div>
                    <div className="answer"> {props.owner.friendship_type} </div>
                    <div className="prompt"> Prefered age of friend? </div>
                    <div className="answer"> {props.owner.age_preference} </div>
                    <div className="prompt"> Prefered gender of friend? </div>
                    <div className="answer"> {props.owner.gender_preference} </div>
                    <div className="prompt"> How far are you willing to Travel? </div>
                    <div className="answer"> {props.owner.willing_mile_radius} </div>
                </Grid>
                <Grid item style={{backgroundColor: "blue", position: "relative", top: "0"}}>
                    <div> {dogs.map(dog => <DogCard dog={dog}/>)}</div>
                </Grid>
                        
                
            </Grid>
        </>
    )
}







export default Swipees
