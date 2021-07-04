import React from "react";
import {Select as AntSelect} from "antd";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {AccentColor, PrimaryColor, CommonShadow} from "../../styles/variables";

const {Option} = AntSelect;


const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  .ant-select {
    width: 75%;
    ${CommonShadow}
    border-radius: 20px !important;
  }
  
  .ant-select-selector {
    color: ${AccentColor} !important;  
    background-color: ${PrimaryColor} !important;
    border-color: ${PrimaryColor} !important;
    border-radius: 20px !important;
  }
  
  .anticon-down {
    color: ${AccentColor} !important;
  }
`

const Select = ({options, onChange}) => {
  return (
    <SelectWrapper>
      <AntSelect
        showSearch
        onChange={onChange}
        optionFilterProp="children"
        defaultValue={"USA"}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {options.map((option, i) => (
          <Option key={i} value={option.value}>{option.value}</Option>
        ))}
      </AntSelect>
    </SelectWrapper>
  )
}


Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Select;