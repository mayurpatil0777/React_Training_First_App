import React from 'react';
//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Notes from './Notes/Notes';
import RefDemo from './Refs/RefDemo';
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import Container from './Container'
import Counter from './Counter/Counter';
import Result from './Result/Result';

axios.interceptors.request.use(req => {
  console.log("reeeq interceptor works");
  return req
})

axios.interceptors.response.use(res => {
  console.log("resss interceptor works");
  return res
})

export const MyContext = React.createContext();

function App() {
  return (
    // <BrowserRouter>
    // <Container></Container>
    //   <div className="">
    //     <h1 className="pl-3">Welcome to first page</h1>
    //     {/*  <RefDemo></RefDemo> */}
    //     {/* <MyContext.Provider value={{ fullName: "Mayur Patil" }}>
    //       <Notes />
    //     </MyContext.Provider>  */}
    // </div>
    // <Container></Container>
    // </BrowserRouter>
    <div className="container mt-3">
      <Counter></Counter>
      <Result/>
    </div>
  );
}

export default App;

// github.com/synergy2411/saama
// https://surveymonkey.com/r/28NGCDY
// synergy2411@outlook.com