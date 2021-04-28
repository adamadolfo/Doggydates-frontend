import react, {useState} from "react"
import DogCard from './DogCard'
import { Grid } from '@material-ui/core';
import SentimentVerySatisfiedTwoToneIcon from '@material-ui/icons/SentimentVerySatisfiedTwoTone';
import SentimentVeryDissatisfiedTwoToneIcon from '@material-ui/icons/SentimentVeryDissatisfiedTwoTone';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const Swipees = (props) => {

    const [dogUnclicked, setDogUnclicked] = useState(true)
    const [dog, setDog] = useState()

    let dogs = props.owner.dogs

    const shownContent = () => {
        setDogUnclicked(!dogUnclicked)
    }

    const dogClicked = (dog) => {
        setDog(dog)
        shownContent()
    }


    return(
        <>
            <Grid 
            container
            spacing={3}
            // alignItems="center"
            justify="center"
            direction="row"
            className="swipe-container"
            style={{marginTop: "2vh"}}
            >
              {dogUnclicked ? 
                <Grid item className="owner-container">
              <div>
                    <img src={props.owner.image_url} className="swipee" />
                    
                    <div className="name"> {props.owner.name} 
                        <div className="age"> {props.owner.age} </div>
                        <div className="city-state" >{props.owner.city} {props.owner.state} </div>
                        <div className="dog-tab-holder">
                            { dogs.map(dog => 
                                <img onClick={() => dogClicked(dog)} src={dog.img_url} className="dog-tab"  /> 
                            ) }
                        </div>

                        <div style={{textAlign: "center"}}> <SentimentVerySatisfiedTwoToneIcon onClick={props.like} style={{fontSize: "5rem", color: "orange", marginRight: "20%", cursor: "pointer"}} /> <SentimentVeryDissatisfiedTwoToneIcon onClick={props.dislike} style={{fontSize: "5rem", color: "red", cursor: "pointer"}} /> </div>
                    </div>
                    {props.owner.owner_exp ? <div className="prompt"> Experience as an owner? </div> : null}
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
                </div>
                </Grid>
                    :
                    <div>
                        <ArrowBackIcon 
                        onClick={shownContent} 
                        style={{fontSize: "3rem", color: "black", cursor: "pointer"}} />
                        <DogCard dog={dog} />
                    </div>
                }

                 
                
            </Grid>
        </> 
    )
}







export default Swipees
