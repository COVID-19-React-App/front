import React from "react";
import PropTypes from "prop-types";
import Counter from "../Counter";
import './CounterList.css';

const CounterList = (props) => {
    return <div className='counter-list'>
        {props.counters.map(counter => (
            <Counter number={counter.number} text={counter.text}/>
        ))}
    </div>
}

CounterList.propTypes = {
    counters: PropTypes.arrayOf(PropTypes.shape(
        {
            number: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }
    ))
}
export default CounterList;