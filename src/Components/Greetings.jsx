import React from "react";
import "./Style/greet.css";

function Greetings() {
  return (
    <>
      <div className="parent-div">
        <header className="header-sec">
          <h1>Welcome to the JavaScript Quiz App!</h1>
          <div className="pngs">
            <img src="./public/light.png" alt="" />
            <img src="./public/favourites.png" alt="" />
            <img src="./public/discussion.png" alt="" />
            <img src="./public/good.png" alt="" />
          </div>
        </header>
        <div className="message-box">
          <div className="message-box-content">
            <h4>
              JavaScript is a versatile and powerful programming language
              primarily used for web development. It allows developers to create
              dynamic and interactive websites. Whether you're manipulating the
              DOM, handling events, or making asynchronous requests to servers,
              JavaScript is the go-to language. With its popularity, extensive
              libraries, and frameworks, JavaScript opens the door to endless
              possibilities in web development.
              <br />
              <br />
              <br />
              Let's test your knowledge and have some fun with JavaScript!
            </h4>
          </div>
        </div>
        <button className="btn">Ready</button>
      </div>
    </>
  );
}

export default Greetings;
