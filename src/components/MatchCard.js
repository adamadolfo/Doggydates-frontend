import React, {useEffect, useState} from "react"

const MatchCard = (props) => {

    return(
        <div className="match-card">
           <img src={props.match.image_url} className='match-image' />
           <div className="match-details">
            {props.match.email}
           </div>
        </div>
    )
}







export default MatchCard
