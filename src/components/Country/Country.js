import styled from 'styled-components';
import {AccentColor, CommonShadow, CommonTextShadow, DarkGradient, FontSizeBase} from "../../styles/variables";
import React from "react";
import PropTypes from 'prop-types';
import utils from "../../store/utils/utils";


const CountryWrapper = styled.div`
    background: ${DarkGradient}
    border-radius: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
  `

const CountryTitle = styled.h1`
    color: ${AccentColor};
    font-size: ${FontSizeBase};
    text-transform: uppercase;
    padding: 10px;
    margin: 0 0 0 20px;
    ${CommonTextShadow}
`

const ColumnsWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    margin-left: 10px; 
    padding: 0 20px 30px 20px;
    
    &::-webkit-scrollbar {
      display: none;
    }
`

const ColumnWrapper = styled.div`
    margin-right: 20px;
    min-width: 27vw;
    border-radius: 20px;
    padding: 10px;
    text-align: center;
    background-color: ${AccentColor};
    ${CommonShadow}
`

const ColumnTitle = styled.div`
`
const ColumnNumber = styled.div`
  font-size: ${FontSizeBase};
`


const Country = ({data}) => {
  return (
    <CountryWrapper>
      <CountryTitle>{data.name}</CountryTitle>
      <ColumnsWrapper>
        <ColumnWrapper key={'died-' + data.key}>
          <ColumnNumber>{utils.beautyCount(data.die)}</ColumnNumber>
          <ColumnTitle>died</ColumnTitle>
        </ColumnWrapper>
        <ColumnWrapper key={'infected-' + data.key}>
          <ColumnNumber>{utils.beautyCount(data.sick)}</ColumnNumber>
          <ColumnTitle>infected</ColumnTitle>
        </ColumnWrapper>
        <ColumnWrapper key={'cured-' + data.key}>
          <ColumnNumber>{utils.beautyCount(data.recover)}</ColumnNumber>
          <ColumnTitle>cured</ColumnTitle>
        </ColumnWrapper>
      </ColumnsWrapper>
    </CountryWrapper>
  )
}

Country.propTypes = {
  data: PropTypes.object,
}


export default Country;