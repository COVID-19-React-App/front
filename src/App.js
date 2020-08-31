import React from "react";
import CounterList from "./components/CounterList";
import logo from "./img/logo.gif";
import "@vkontakte/vkui/dist/vkui.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="app">
      <div className="logo" style={{ backgroundImage: `url(${logo})` }} />
      <CounterList
        counters={[
          { number: "985 346", text: "Выявлено заболевших" },
          { number: "4 941", text: "Выявлено заболевших за последние сутки" },
          { number: "695", text: "Новых случаев в Москве" },
          { number: "806 982", text: "Человека выздоровело" },
        ]}
      />
    </div>
  );
}

export default App;
