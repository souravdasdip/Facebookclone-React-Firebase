import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import db from "./firebase";

function MessageSender() {
  const [{ user }] = useStateValue();

  const [input, setinput] = useState("");
  const [imageURL, setimageURL] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    });

    setinput("");
    setimageURL("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            type="text"
            name=""
            className="messageSender__input"
            placeholder={`What's on your mind. ${user.displayName}`}
            onChange={(e) => {
              setinput(e.target.value);
            }}
          />
          <input
            value={imageURL}
            onChange={(e) => setimageURL(e.target.value)}
            placeholder="image URL"
          />
          <button onClick={handleSubmit}>Hidden Submit</button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
