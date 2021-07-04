import React from "react";
import constMeta from "../../pages/Chronology/const";
import {defaults, Line} from "react-chartjs-2";
import PropTypes from "prop-types";
import {AccentColor} from "../../styles/variables";


const PlotList = ({statList}) => {
  statList.forEach((item) => {
    item.datasets[0].borderColor = AccentColor;
    item.datasets[0].backgroundColor = AccentColor;
  });
  defaults.global.defaultFontColor = AccentColor;
  return (
    <div>
      {statList.map((item, i) => (
        <Line key={i} data={item} options={constMeta[i]}/>
      ))}
    </div>
  )
}

PlotList.propTypes = {
  statList: PropTypes.array.isRequired,
}

export default PlotList;
