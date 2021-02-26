import React, { useState, useEffect } from "react"
import './App.css';
import { Button, FormControl, InputLabel, Input } from "@material-ui/core"
import Message from './Message.js'
import db from "./firebase"
import firebase from "firebase"
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send'
import { IconButton } from '@material-ui/core'

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');


  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    })

  }, [])



  useEffect(() => {

    setUsername(prompt("Please enter your name"))
  }, [])



  const sendMessage = (event) => {
    // all logic for sending the messages
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // event.preventDefault()
    // setMessages([...messages, { username: username, text: input }])
    setInput("")
  }



  return (
    <div className="App" >
      <img src=" data:image/png;base64,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" />
      <h1>It's Messanger</h1>
      <h2> Wellcome {username}</h2>
      
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input className="app_input" placeholder="Enter a messages....." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {/* Messange themselves */}
      <FlipMove>
        {
          messages.map(({ id, message }) => (

            <Message key={id} username={username} message={message} />

          ))

        }
      </FlipMove>
    </div>
  );
}

export default App;
