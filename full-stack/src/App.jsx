import React, { Component } from "react";
import Header from "./component/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from "./component/Register";
import NewsItem from "./component/NewsItem";
import Login from "./component/Login";



export class App extends Component {
  render(){
    return(
  <Router>
  <Header/>
  <Routes>
       <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/general" element={<NewsItem/>}></Route>
        <Route path="/technology" element={<NewsItem/>}></Route>
        <Route path="/science" element={<NewsItem/>}></Route>
        <Route path="/business" element={<NewsItem/>}></Route>
        <Route path="/sports" element={<NewsItem/>}></Route>
        <Route path="/entertainment" element={<NewsItem/>}></Route>
        <Route path="/health" element={<NewsItem/>}></Route> 
      </Routes>
      
      </Router>
    );
  }
}

export default App;
