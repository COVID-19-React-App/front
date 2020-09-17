import React from "react";
import PropTypes from "prop-types";
import Counter from "../Counter";
import styled from 'styled-components';


const CounterListBlock = styled.div`
  display: flex;
  margin: 0 20px;
  flex-wrap: nowrap;
  height: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

const CounterList = (props) => {
  return (
    <CounterListBlock>
      {props.counters.map((counter, i) => (
        <Counter key={i} number={counter.number} text={counter.text}/>
      ))}
    </CounterListBlock>
  );
};

CounterList.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
export default CounterList;
