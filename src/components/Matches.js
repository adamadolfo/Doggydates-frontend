import React, {useEffect, useState} from "react"
import Header from './Header'
import MatchCard from './MatchCard'
import ConversationCard from './ConversationCard'
import NewMessageBox from './NewMessageBox'
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
    

    // fetches
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
            setConversations(convos[1])
            setLoading(false)
        })
    }

    //fetches


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

    const postMessage = (e) => {
        e.preventDefault()
        console.log(e.target)

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
                !loading ? conversations.map(conversation => 
                        <Grid onClick={() => showMessages(conversation)} item className='chat-item'> 
                            <ConversationCard  conversation={conversation} /> 
                        </Grid>
                        ) : 
                        null
                : 
                    <ChatBox messages={messages} /> :
                 
                    <NewMessageBox postMessage={postMessage} />
            
                }
            
            </Grid>
          
          
        </>
    )
}







export default Matches
