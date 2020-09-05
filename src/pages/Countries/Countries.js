// import React from "react";
// import { Table } from "antd";
// import "./Countries.css";
// // import rawData from "./data.js";
//
// function onChange(pagination, filters, sorter, extra) {
//   console.log("params", pagination, filters, sorter, extra);
// }
//
// const columns = [
//   {
//     title: "Страна",
//     dataIndex: "name",
//     sorter: (a, b) => a.name.length - b.name.length,
//     ellipsis: true,
//     width: 150,
//     fixed: "left",
//     sortDirections: ["descend", "ascend"],
//   },
//   {
//     title: "Болеет",
//     dataIndex: "sick",
//     defaultSortOrder: "descend",
//     width: 100,
//     sorter: (a, b) => a.sick - b.sick,
//     sortDirections: ["descend", "ascend"],
//   },
//   {
//     title: "Вылечилось",
//     dataIndex: "recover",
//     width: 120,
//     sorter: (a, b) => a.recover - b.recover,
//     sortDirections: ["descend", "ascend"],
//   },
//   {
//     title: "Умерло",
//     dataIndex: "die",
//     width: 100,
//     sorter: (a, b) => a.die - b.die,
//     sortDirections: ["descend", "ascend"],
//   },
// ];
//
// const parseData = () => {
//   let data = [];
//   Object.entries(rawData.countryitems[0]).forEach((item, index) => {
//     item = item[1];
//     if (item.title !== undefined) {
//       data.push({
//         key: index,
//         name: item.title,
//         sick: item.total_active_cases,
//         recover: item.total_recovered,
//         die: item.total_deaths,
//       });
//     }
//   });
//   return data;
// };
//
// const data = parseData();
//
// class Countries extends React.Component {
//   render() {
//     return (
//       <div className="countries">
//         <Table
//           columns={columns}
//           dataSource={data}
//           onChange={onChange}
//           pagination={{ position: ["topLeft", "none"] }}
//         />
//       </div>
//     );
//   }
// }
//
// export default Countries;
