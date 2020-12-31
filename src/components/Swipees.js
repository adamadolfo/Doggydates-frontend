import react from "react"
import { Grid } from '@material-ui/core';


const Swipees = (props) => {
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
                    <img src={props.owner.image_url} style={{height: "400px", width: "400px"}} />
                    <h3> {props.owner.name} {props.owner.age} </h3>
                    <div>{props.owner.city}, {props.owner.state} </div>
                    <div> Experience as owner: {props.owner.owner_exp} </div>
                    <div> Intentions: {props.owner.friendship_type} </div>
                    <div> Prefered age of friend: {props.owner.age_preference} </div>
                    <div> Prefered gender of friend: {props.owner.gender_preference} </div>
                    <div> What are you looking forward to doing with your dog(s) and friend? {props.owner.looking_for} </div>
                    <div> How far are you willing to Travel? {props.owner.willing_mile_radius} </div>

                    <div> 
                        
                    {props.owner.dogs.map(dog => {
                        <div>{dog.name} </div>
                    })}
                         </div>
                </Grid>
                
            </Grid>
        </>
    )
}







export default Swipees
