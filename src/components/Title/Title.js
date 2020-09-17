import styled from 'styled-components';
import React from 'react';
import {PrimaryColor, FontSizeLg, CommonTextShadow, FontSizeBase} from '../../styles/variables'
import PropTypes from "prop-types";
import './Title.sass';

const Title = styled.h1`
    color: ${PrimaryColor};
    font-size: ${FontSizeLg};
    margin-bottom: 0;
    font-weight: 700;
    ${CommonTextShadow}
  `
const Subtitle = styled.h2`
  color: ${PrimaryColor};
    font-size: ${FontSizeBase};
    margin-bottom: 0;
    font-weight: 700;
    ${CommonTextShadow}
`

const TitleBlock = ({title, subtitle}) => {
  return <div className='title-block'>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </div>
}

TitleBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default TitleBlock;