import React, {useEffect, useState} from "react"
import Header from './Header'
import MatchCard from './MatchCard'
import ConversationCard from './ConversationCard'
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

    const getConversations = () => {
        fetch('http://localhost:3001/find-conversations', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(conversations => {
            setConversations(conversations)
        })
    }



    useEffect(() => {
        getMatches()
        getConversations()
    }, [])

    const showConversations = () => {
        setConversationsShown(conversationsShown = false)
    }

    const showMessages = () => {
        showConversations()
        setMessages(messages)
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
                        <MatchCard match={match} /> 
                    </Grid>
                    ) : null }
            </Grid>
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center" 
                style={{marginTop: "10vh"}}
            >
                {conversationsShown ? 
                !loading ? conversations.map(conversation => 
                        <Grid item> 
                            <ConversationCard conversation={conversation} /> 
                        </Grid>
                        ) : null 
                : 
                    // messages.each
                    <div> </div>
                }
            
            </Grid>
          
          
        </>
    )
}







export default Matches
