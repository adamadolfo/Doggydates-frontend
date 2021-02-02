import react, {useState, useEffect} from 'react';
import Swipees from './Swipees'
import Header from './Header'

const SwipePage = () => {
    const [owners, setOwners] = useState([])
    const [randomOwner, setRandomOwner] = useState()

    const loggedInUser = JSON.parse(localStorage.getItem("user"))
    const user = {
        id: loggedInUser.id
    }
    useEffect(() => {
        fetch('http://localhost:3001/feed', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(ownersData => {
            setOwners(ownersData)
            randomizeSwipee(ownersData)
        })
    }, [])

    const randomizeSwipee = (array) => {
        const randomized = array[array.length * Math.random() | 0]
        setRandomOwner(randomized)
    }




    return(
        <div style={{height: "auto"}} >
            <Header />
            { randomOwner ? <Swipees owner={randomOwner}/> : null}
            
        </div>
    )
}







export default SwipePage