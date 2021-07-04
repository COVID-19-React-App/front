import PropTypes from 'prop-types';
import React from "react";
import Country from "../Country";
import styled from "styled-components";


const CountryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px  0;
  flex-wrap: nowrap;
  overflow-y: auto;
  margin-bottom: 20px;
`

const CountryList = ({data}) => {
  return (
    <CountryListWrapper>
      {data.map((item, i) => (
          <Country key={i} data={item}/>
        )
      )}
    </CountryListWrapper>
  )
}

CountryList.propTypes = {
  data: PropTypes.array,
}

export default CountryList;

