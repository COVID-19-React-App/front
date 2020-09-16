import React from 'react';
import PropTypes from "prop-types";
import {AccentColor, FontSizeLg, CommonTextShadow, DarkGradient, LightGradient} from '../../styles/variables'
import styled from 'styled-components';


const Number = styled.h1`
  padding-top: 20px;
  font-size: ${FontSizeLg};
  color: ${AccentColor};
  ${CommonTextShadow}
`

const TextWrapper = styled.div`
  transform: rotate(90deg);
`

const Text = styled.div`
  font-size: ${FontSizeLg};
  text-transform: lowercase;
  color: ${AccentColor};
  width: fit-content;
  white-space: nowrap;
  margin-left: ${FontSizeLg};
  background: ${LightGradient}
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const CounterBlock = styled.div`
  width: 35vw;
  margin-right: 20px;
  text-align: center;
  flex: 0 0 auto;
  border-radius: 20px;
  position: relative;
  background: ${DarkGradient}
`

const Counter = ({number, text}) => {
  return <CounterBlock>
    <Number>{number}</Number>
    <TextWrapper>
      <Text>{text}</Text>
    </TextWrapper>
  </CounterBlock>;
}

Counter.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

export default Counter;