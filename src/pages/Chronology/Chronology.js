import React, {useEffect, useState} from "react";
import "@vkontakte/vkui/dist/vkui.css";
import statistic from "../../store/statistic";
import countriesConsts from "./../../store/config";
import TitleBlock from "../../components/Title";
import Loader from "../../components/Loader";
import PlotList from "../../components/PlotList";
import Select from "../../components/Select";
import styled from 'styled-components';
import {PrimaryColor85} from "../../styles/variables";

const defaultStat = [null, null];

let changeCountry = (setCountry, setStat, setIsLoading) => {
  return (value) => {
    setCountry(countriesConsts.country2code[value]);
    setStat(defaultStat);
    setIsLoading(true);
  };
};

const countriesOptions = [];
for (const value of countriesConsts.countriesNames) {
  countriesOptions.push({value, disabled: false});
}


const PlotListWrapper = styled.div`
  background-color: ${PrimaryColor85};
  padding: 60px 10px 100px 10px; 
  border-radius: 40px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  
  .ant-select {
    transform: translateY(-70px);
  }
  
  canvas:first-of-type {
    margin-bottom: 50px;
  }
`

function Chronology() {
  let [isLoading, setIsLoading] = useState(true);
  let [isFailed, setFailed] = useState(false);
  let [stat, setStat] = useState(defaultStat);
  let [country, setCountry] = useState("US");

  let setter = changeCountry(setCountry, setStat, setIsLoading);

  useEffect(() => {
    let err = null;
    if (stat === defaultStat && !isFailed) {
      err = statistic.handleCountryTimeline(setStat, setIsLoading, country);
      if (err !== null) {
        console.log(err);
        setFailed(true);
      }
    }
  }, [stat, isFailed, country]);

  return (
    <div>
      <TitleBlock title='LAST WEEK' subtitle='STATISTICS'/>
      {isLoading && (
        <Loader/>
      )}
      <PlotListWrapper>
        <Select options={countriesOptions} onChange={setter}/>
        {!isLoading && (
          <PlotList statList={stat}/>
        )}
      </PlotListWrapper>
    </div>
  );
}

export default Chronology;
