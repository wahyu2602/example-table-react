import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import DataTable from "./components/DataTable";

const root = ReactDOM.createRoot(document.getElementById('root'));

const dataOrang = [
  {
    name: "Tiger Nixon",
    position: "System Architect",
    salary: "$3,120",
    start_date: "2011/04/25",
    office: "Edinburgh",
    extn: "5421"
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422"
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422"
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422"
  },];

function Peoples(dataOrangs) {
  this.dataOrangs = dataOrangs.map((item) => {
    return {
      "name": item.name,
      "position": item.position,
      "salary": item.salary,
      "start_date": item.start_date,
      "office": item.office,
      "extn": item.extn,
      "detail": `<button>${item.extn}</button>`
    }
  })
};

root.render(
  <DataTable
    data={new Peoples(dataOrang).dataOrangs}
    columns={[
      { title: "name", data: "name" },
      { title: "position", data: "position" },
      { title: "salary", data: "salary" },
      { title: "start_date", data: "start_date" },
      { title: "office", data: "office" },
      { title: "extn", data: "extn" },
      { title: "Action", data: "detail" },
    ]}
    options={{
      paging: true,
      scrollX: true,
      scrollY: "100%",
      scrollCollapse: false,
      // scrollY: '500',
      autoWidth: false,
      search: true,
      info: false
      // fixedColumns: true
    }}
  />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
