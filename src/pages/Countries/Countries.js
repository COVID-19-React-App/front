import React, {useEffect, useState} from "react";
import {Table} from "antd";
import "./Countries.css";
import statistic from "../../store/statistic";
import Loader from "../../components/Loader";

const columns = [
  {
    title: "Страна",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
    ellipsis: true,
    fixed: "left",
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Болеет",
    dataIndex: "sick",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.sick - b.sick,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Вылечилось",
    dataIndex: "recover",
    sorter: (a, b) => a.recover - b.recover,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Умерло",
    dataIndex: "die",
    sorter: (a, b) => a.die - b.die,
    sortDirections: ["descend", "ascend"],
  },
];

const defaultStat = null;

function Countries() {
  let [isLoading, setIsLoading] = useState(true);
  let [isFailed, setFailed] = useState(false);
  let [stat, setStat] = useState(defaultStat);

  useEffect(() => {
    let err = null;
    if (stat === defaultStat && !isFailed) {
      err = statistic.handleCountriesStat(setStat, setIsLoading);
      if (err !== null) {
        console.log(err);
        setFailed(true);
      }
    }
  }, [stat, isFailed]);

  return (
    <div className="countries">
      {isLoading && (
        <Loader/>
      )}
      {!isLoading && (
        <Table
          columns={columns}
          dataSource={stat.tableData}
          pagination={{position: ["topLeft", "none"]}}
        />
      )}
    </div>
  );
}

export default Countries;
