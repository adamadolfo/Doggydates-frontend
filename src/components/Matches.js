import React, {useEffect, useState} from "react"
import Header from './Header'
import MatchCard from './MatchCard'
import Messaging from './Messaging'
import ChatBox from './ChatBox'
import { Grid } from '@material-ui/core';


const Matches = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"))
    const user = {
        id: loggedInUser.id
    }


    const [matches, setMatches] = useState()
    const [loading, setLoading] = useState(true)
    const [conversations, setConversations] = useState()
    const [targetedUserMessaging, setTargetedUserMessaging] = useState()
    const [changeScreen, setChangeScreen] = useState(false)
    

    ////// fetches
    /// sets matches are the circular profile picks using matches in hooks
    const getMatches = () => {
        fetch('http://localhost:3001/accepted', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(matches => {
            setMatches(matches)
        })
    }

    ///sets conversations in a format of 
    // [ 
    //  [owner_id, [ {owner} , [messages] ] ] , 
    //  [owner_id, [ {owner} , [messages] ] ] 
    //]
    
    const getConversations = () => {
        fetch('http://localhost:3001/find-conversations', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(responseConversations => {
            const convos = Object.entries(responseConversations)
            setConversations(convos)
            
            setLoading(false)
        })
    }

    useEffect(() => {
        getMatches()
        getConversations()
    }, [])

    ////// end of fetches


    // sets if you see conversations in bottom screen
    // const showMessages = (clickedConversation) => {
    //     // setMessages(clickedConversation)
    //     // setConversationsShown(!conversationsShown) 
    // }

    //fires when you click on the user picture
    // match is user clicked
    const showChat = (match) => {
        
        if (!loading) {
            const convoFound = conversations.find(conversation => parseInt(conversation[0]) == match.id )
            if (convoFound == undefined) {
                alert("nope")
            } else {
                setTargetedUserMessaging(convoFound)
            }
        }
        setChangeScreen(!changeScreen)
    }

   

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
                
                {!loading ? 
                    !changeScreen ?
                        matches.map(match => 

                            <Grid item> 
                                <MatchCard showChat={showChat} user={user} match={match} /> 
                            </Grid>
                            ) : <Messaging />
                        :
                        null
                        }
            </Grid>

      
          
          
        </>
    )
}







export default Matches
