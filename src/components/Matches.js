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
            console.log(matches)
            setMatches(matches)
            setLoading(false)
        })
    }
    
    const getConversations = () => {
        fetch('http://localhost:3001/find-conversations', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(responseConversations => {
            console.log(responseConversations)
            const convos = Object.entries(responseConversations)
            setConversations(convos)
            
        })
    }

    useEffect(() => {
        getMatches()
        getConversations()
    }, [])

    ////// end of fetches

    
    const changeTheScreen = () => {
        setChangeScreen(!changeScreen)
    }

    const createConversationIfNone = (match) => {

        const convoObj = {
            sender_id: user.id, 
            recipient_id: match.id

        }

        fetch('http://localhost:3001/conversations', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(convoObj)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setTargetedUserMessaging(data)
        })
    }
    
    //fires when you click on the user picture
    // match is user clicked
    const showChat = (match) => {
        
        if (!loading) {
            // const convoFound = conversations.find(conversation => parseInt(conversation[0]) == match.id )
            // if (convoFound == undefined) {
            //     createConversationIfNone(match)
            // } else {
            //     setTargetedUserMessaging(convoFound)
            // }
            createConversationIfNone(match)
            
        }
        changeTheScreen()
    }

   const postMessage = (e, messageBody) => {
        e.preventDefault()
        
        const messageObj = {
            owner_id: user.id, 
            body: messageBody,
            conversation_id: targetedUserMessaging[0].id
        }

        fetch('http://localhost:3001/messages', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(messageObj)
        })
        .then(r => r.json())
        .then(responseConversations => {
            const convos = [responseConversations]
            
            setTargetedUserMessaging(convos)
        })
   }

    return(
        <>
            <Header />

            <Grid container
             spacing={5} 
             direction="row"
             justify="center"
             alignItems="center" 
             style={{backgroundColor: 'white', marginTop: ".1vh"}}
             >
                
                {!loading ? 
                

                    !changeScreen 
                    ?

                        matches.count == 0 ? 
                        <div> You have no connections yet. Happy swiping! </div> 
                        :
                        matches.map(match => 


                            <Grid item > 
                                <MatchCard showChat={showChat} user={user} match={match} /> 
                            </Grid>
                            )     
                                  : <Messaging postMessage={postMessage} user={user} convo={targetedUserMessaging} changeTheScreen={changeTheScreen}/>
                        
                          :
                        null
                        }
            </Grid>

      
          
          
        </>
    )
}







export default Matches
