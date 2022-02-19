import { useState } from "react";

import "./App.css";
import "./style/header.css";
import "./style/palette.css";

import Header from "./components/Header";
import Palette from "./components/Palette";

function App() {

  // const [navOn, setNav] = useState(false);
  var navOn = false;
  function changeNavStatus () {
    if (navOn===true) {
      navOn = false;
    } else {
      navOn=true;
    }
  }

  return (
    <div className="app">
      <Header callback = {changeNavStatus} />
      <Palette navOn = {navOn} />
    </div>
  );
}

export default App;
