import { useState } from "react";
import "./App.css";
import heart from "./img/heart.png";
import love from "./video/love.mp4";

function App() {
  const [click, setClick] = useState(false);

  console.log(click);
  return (
    <div className="App">
      <div
        style={{
          display: click ? "none" : "",
        }}
        className="heart"
      >
        <h1
          style={{
            display: click ? "flex" : "",
            transform: click ? "translateY(-300%)" : "",
          }}
        >
          Жүрөктү бас
          <span>👇</span>
        </h1>

        <img
          style={{
            position: click ? "absolute" : "",
            right: click ? "100px" : "",
            display: click ? "flex" : "",
            transform: click ? "translateX(-100%) scaleX(-1)" : "",
          }}
          onClick={() => setClick(true)}
          src={heart}
          alt=""
        />
        <img
          onClick={() => setClick(true)}
          style={{
            display: click ? "flex" : "",
            position: click ? "absolute" : "",
            left: click ? "100px" : "",
            transform: click ? "translateX(100%)" : "scaleX(-1)",
            marginLeft: "-1px",
          }}
          src={heart}
          alt=""
        />
      </div>
      <video
        style={{
          width: click ? "100vw" : "0px",
        }}
        controls
        autoPlay
      >
        <source src={love} />
      </video>
    </div>
  );
}

export default App;
