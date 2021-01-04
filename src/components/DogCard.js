import react from "react"
import { Grid } from '@material-ui/core';


const DogCard = (props) => {
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
                    <img src={props.dog.img_url} style={{height: "200px"}}/>
                    <h1> {props.dog.name} {props.dog.age} </h1>
                    <div>{props.dog.breed}</div>
                    <div>{props.dog.gender}</div>
                    <div>Great Date Points: {props.dog.great_date}</div>
                    <div>{props.dog.breed}</div>
                    <br/>
                    <div>About {props.dog.name}</div>
                    <div>Enjoys: {props.dog.enjoys}: </div>
                    <div>Dislikes: {props.dog.dislikes}: </div>
                    <div>Gender {props.dog.name} plays best with: {props.dog.gets_along_with}</div>
                    <div>General behavior {props.dog.name} shows around others: {props.dog.temperement}</div>
                    <div>{props.dog.name} is: {props.dog.dominate_submissive}</div>
                    <div>Is {props.dog.name} leashed or unleashed usually? {props.dog.leash}</div>
                    <div>{props.dog.name} prefers: {props.dog.one_on_one_group} dates</div>
                    <div>Where {props.dog.name} comes from: {props.dog.adopted_breeder} </div>
                </Grid>
                
            </Grid>
        </>
    )
}


    // t.string "img_url"






export default DogCard
