import React from "react";
import ReactDOM from "react-dom";
import StudentList from './list';
import TableHead from './head';
import FormWindow from './form';







ReactDOM.render(<TableHead />, document.querySelector('#app'));
ReactDOM.render(<FormWindow />, document.querySelector('#form'));
ReactDOM.render(<StudentList />, document.querySelector('#root')); 
