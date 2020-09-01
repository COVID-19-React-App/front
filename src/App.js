import React from "react";
import CounterList from "./components/CounterList";
import logo from "./img/logo.gif";
import "@vkontakte/vkui/dist/vkui.css";
import "antd/dist/antd.css";
import MainPageData from "./pages/Main/data";

function App() {
  return (
    <div className="app">
      <div className="logo" style={{ backgroundImage: `url(${logo})` }} />
      <CounterList counters={MainPageData} />
    </div>
  );
}

export default App;
