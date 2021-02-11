import React, {useEffect, useState} from "react"
import Header from './Header'


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
            {!loading ? matches.map(match => <div> {match.email} <img src={match.image_url} style={{borderRadius: "150px"}}/> </div>) : null}
        </>
    )
}







export default Matches
