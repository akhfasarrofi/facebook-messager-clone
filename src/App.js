import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  /* useState = variable in REACT */
  /* useEffect = run code on a condition in REACT */
  useEffect(() => {
    /* run one when the app components loads / mengambil data di database firebase dan diurutakan berdasrkan desc */
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      });
  }, [])


  useEffect(() => {
    /* const username= promt ('Please enter your name'); */
    setUsername(prompt('Please enter your name'))

  }, []) /* condition */

  const sendMessage = (event) => {
    /* ketika di enter langsung keluar nilai nya */
    event.preventDefault();

    /* manambahkan data ke database firebase */
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="" />
      <h1>Hello Guys</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder='Enter message...' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            /* id, username, message diambil dari field database (jika key={id} dihapus pesan akan geser dari kiri ke kanan)*/
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
