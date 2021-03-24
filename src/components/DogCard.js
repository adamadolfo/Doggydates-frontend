import react from "react"
import { Grid, Paper } from '@material-ui/core';


const DogCard = (props) => {
    return(
        <>
            <img src={props.dog.img_url} id="dog-image" />
        
            <div className="name ">  {props.dog.name} 
                <div className="age" >{props.dog.age}  <span> years old</span> </div>
                <div style={{fontSize: "1.5rem", marginTop: "5%"}}> {props.dog.breed} </div>
                <div style={{fontSize: "1rem", marginTop: "5%"}}> {props.dog.gender}</div>
            </div>

            <div style={{padding: "1%", fontSize: "large"}}>
                <div className="dog-traits"> <span className="trait-name"> Enjoys: </span> {props.dog.enjoys} </div>
                <div className="dog-traits"> <span className="trait-name"> Dislikes: </span> {props.dog.dislikes} </div>
                <div className="dog-traits"> <span className="trait-name"> Gender {props.dog.name} plays best with:</span> {props.dog.gets_along_with}</div>
                <div className="dog-traits"> <span className="trait-name"> General behavior {props.dog.name} shows around others:</span> {props.dog.temperement}</div>
                <div className="dog-traits"> <span className="trait-name"> {props.dog.name} is:</span> {props.dog.dominate_submissive}</div>
                <div className="dog-traits"> <span className="trait-name"> Is {props.dog.name} leashed or unleashed usually?</span> {props.dog.leash}</div>
                <div className="dog-traits"> <span className="trait-name"> {props.dog.name} prefers:</span> {props.dog.one_on_one_group} dates</div>
                <div className="dog-traits"> <span className="trait-name"> Where {props.dog.name} comes from:</span> {props.dog.adopted_breeder} </div>
            </div>    
       
        </>
    )
}


export default DogCard
