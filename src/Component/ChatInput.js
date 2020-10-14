import React, { useState } from 'react'
import db from '../firebase';
import "./ChatInput.css"
import { useStateValue } from './StateManager/StateProvider';
import firebase from "firebase"


function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState()
    const [{ user }] = useStateValue()
    const sendMessage = e => {
        e.preventDefault();
        if (channelId && input) {
            db.collection("rooms").doc(channelId).collection("messages").add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            })
        }
        setInput("")
    }
    return (
        <div className="chatInput">
            <form>
                <div className="form-group">
                    <input type="text" value={input}
                        className="form-control" id="exampleInputEmail1"
                        onChange={(e) => setInput(e.target.value)}
                        aria-describedby="emailHelp" placeholder={`Message #${channelName?.toLowerCase()}...`} />

                </div>
                <button type="submit" onClick={sendMessage} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ChatInput
