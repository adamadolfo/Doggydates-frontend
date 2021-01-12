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
            spacing={0}
            align="center"
            justify="center"
            direction="column"
            >
                <Grid item>
                    <img src={props.owner.image_url} className="swipee" />
                    <div className="swipe-text" > {props.owner.name} {props.owner.age} </div>
                    <div>{props.owner.city}, {props.owner.state} </div>
                    <div> Experience as owner: {props.owner.owner_exp} </div>
                    <div> Intentions: {props.owner.friendship_type} </div>
                    <div> Prefered age of friend: {props.owner.age_preference} </div>
                    <div> Prefered gender of friend: {props.owner.gender_preference} </div>
                    <div> What are you looking forward to doing with your dog(s) and friend? {props.owner.looking_for} </div>
                    <div> How far are you willing to Travel? {props.owner.willing_mile_radius} </div>

                    <div> {dogs.map(dog => <DogCard dog={dog}/>)}</div>
                 
                        
                </Grid>
                
            </Grid>
        </>
    )
}







export default Swipees
