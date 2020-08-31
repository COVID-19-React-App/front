import React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import { Select, Timeline } from "antd";
import "./Chronology.css";

const { Option } = Select;
// TODO: попробовать StyledComponents
const colorSuccess = "#2d7f06";

export default class Chronology extends React.Component {
  state = { value: 0, previous: 0 };

  render() {
    return (
      <div className="chronology">
        <Select
          showSearch
          className="chronology__select"
          placeholder="Выберите страну"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="RU">Россия</Option>
          <Option value="EN">Англия</Option>
        </Select>
        <Timeline className="chronology__timeline">
          <Timeline.Item color={colorSuccess}>
            <div className="chronology__timeline__date">31.08.2020</div>
            <div className="chronology__timeline__text">
              <span>20123</span> умерло
            </div>
            <div className="chronology__timeline__text">
              <span>12422</span> вылечилось
            </div>
            <div className="chronology__timeline__text">
              <span>0</span> воскресло
            </div>
          </Timeline.Item>
          <Timeline.Item color={colorSuccess}>
            <div className="chronology__timeline__date">28.08.2020</div>
            <div className="chronology__timeline__text">
              <span>20100</span> умерло
            </div>
            <div className="chronology__timeline__text">
              <span>12042</span> вылечилось
            </div>
            <div className="chronology__timeline__text">
              <span>0</span> воскресло
            </div>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }
}