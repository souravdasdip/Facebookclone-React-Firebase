import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Its me"
      />
      <Story
        image="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg"
        profileSrc="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg"
        title="SD"
      />
      <Story
        image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="👩‍🦰"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhUwSzn4_0_-rxxjalDIXuA7C6g-HbBIINLQ&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhUwSzn4_0_-rxxjalDIXuA7C6g-HbBIINLQ&usqp=CAU"
        title="💘"
      />
    </div>
  );
}

export default StoryReel;
