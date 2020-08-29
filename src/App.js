import React from 'react';
import CounterList from "./components/CounterList";

function App() {
    return (
        <div className="App">
            <CounterList counters={[
                {number: '985 346', text: 'Выявлено заболевших'},
                {number: '4 941', 'text': 'Выявлено заболевших за последние сутки'},
                {number: '> 36 млн', 'text': 'Проведено тестов'}
            ]}/>
        </div>
    );
}

export default App;
