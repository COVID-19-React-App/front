import React from "react";
import {Select as AntSelect} from "antd";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {AccentColor, CommonShadow, PrimaryColor} from "../../styles/variables";

const {Option} = AntSelect;


const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  .ant-select {
    width: 75%;
    ${CommonShadow}
    margin-bottom: 20px;
    border-radius: 20px !important;
  }
  
  .ant-select-selector {
    padding: 5px 5px;
    color: ${AccentColor} !important;  
    background-color: ${PrimaryColor} !important;
    border-color: ${PrimaryColor} !important;
    border-radius: 20px !important;
  }
  
  .ant-select-selection-item {
    background-color: ${AccentColor} !important;
    border-color: ${PrimaryColor} !important;
    color: ${PrimaryColor} !important;
    border-radius: 10px;
  }
  
  .anticon-close-circle {
    color: ${AccentColor} !important;
  }
  
  .ant-select-clear {
    background-color: transparent;
  }
`

const MultipleSelect = ({options, onChange}) => {
  options = options[0];
  return (
    <SelectWrapper>
      <AntSelect
        mode="multiple"
        allowClear
        placeholder="Please select"
        defaultValue={["Russia", "USA"]}
        onChange={onChange}
      >
        {options.map((option, i) => (
          <Option key={i} value={option}>{option}</Option>
        ))}
      </AntSelect>
    </SelectWrapper>
  )
}


MultipleSelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default MultipleSelect;