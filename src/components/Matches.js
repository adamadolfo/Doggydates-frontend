import React, {useEffect, useState} from "react"
import Header from './Header'
import MatchCard from './MatchCard'
import { Grid } from '@material-ui/core';


const Matches = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"))
    const user = {
        id: loggedInUser.id
    }

    const [matches, setMatches] = useState()
    const [loading, setLoading] = useState(true)

    const getMatches = () => {
        fetch('http://localhost:3001/accepted', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(matches => {
            setMatches(matches)
            setLoading(false)
        })
    }




    useEffect(() => {
        getMatches()
    }, [])


    return(
        <>
            <Header />
            <Grid container
             spacing={5} 
             direction="row"
             justify="center"
             alignItems="center" 
             style={{backgroundColor: 'white'}}
             >
                
                {!loading ? matches.map(match => 
                    <Grid item> 
                        <MatchCard match={match} /> 
                    </Grid>
                    ) : null }
            </Grid>
        </>
    )
}







export default Matches
