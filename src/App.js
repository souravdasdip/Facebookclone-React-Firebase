import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login.js";
import SideBar from "./SideBar";
import { useStateValue } from "./StateProvider";
import Widget from "./Widget";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {/* Header */}
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
