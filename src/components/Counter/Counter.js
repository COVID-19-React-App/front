import React from 'react';
import PropTypes from "prop-types";
import './Counter.css';

const Counter = (props) => {
    return <div className='counter'>
        <div className='counter__number'>
            {props.number}
        </div>
        <div className='counter__text'>
            {props.text}
        </div>
    </div>;
}

Counter.propTypes = {
    number: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Counter;