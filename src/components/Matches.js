import React, {useEffect, useState} from "react"
import Header from './Header'
import MatchCard from './MatchCard'
import ConversationCard from './ConversationCard'
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
    const [conversationsShown, setConversationsShown] = useState(true)
    const [conversations, setConversations] = useState()
    const [messages, setMessages] = useState()
    const [newMessageBox, setNewMessageBox] = useState(false)
    

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

    ////// end of fetches


    useEffect(() => {
        getMatches()
        getConversations()
    }, [])

    // const showConversations = () => {
    //     setConversationsShown(conversationsShown = false)
    // }

    const showMessages = (clickedConversation) => {
        setMessages(clickedConversation)
        setConversationsShown(!conversationsShown) 
    }

    const sendMessage = (match) => {
        console.log(match.id)
        console.log(user.id)
        setNewMessageBox(!newMessageBox)
        
    }

    const postMessage = (e, message) => {
        e.preventDefault()

        debugger

        const messageObj = {
            body: message,
            sender_id: user.id
            // recipient_id: 
        }

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
                
                {!loading ? matches.map(match => 

                    <Grid item> 
                        <MatchCard sendMessage={sendMessage} user={user} match={match} /> 
                    </Grid>
                    ) : null }
            </Grid>

            <Grid 
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3} 
                style={{marginTop: "10vh"}}
            >
                {!newMessageBox ? 
                conversationsShown ? 
                !loading ? conversations[0].map(conversation => 
                        <Grid onClick={() => showMessages(conversation)} item className='chat-item'> 
                            <ConversationCard  conversation={conversation} /> 
                        </Grid>
                        ) : 
                        null
                : 
                    <ChatBox messages={messages} /> :
                 
                    <Messaging postMessage={postMessage} />
            
                }
            
            </Grid>
          
          
        </>
    )
}







export default Matches
