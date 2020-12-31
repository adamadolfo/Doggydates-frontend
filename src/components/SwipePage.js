import react, {useState, useEffect} from 'react';
import Swipees from './Swipees'
import Header from './Header'

const SwipePage = () => {
    let [owners, setOwners] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/owners')
        .then(r => r.json())
        .then(ownersData => {
            setOwners(owners = ownersData)
        })
    }, [])

    return(
        <div style={{height: "auto"}} >
            <Header />
            {owners.map(owner => <Swipees owner={owner} />)}
            
        </div>
    )
}







export default SwipePage