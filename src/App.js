import React from "react";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation"
import {HashRouter, Route} from "react-router-dom";

function App(){
  return (
    //HashRouter만 있는건 아님 ex) BrowserRouter
    //HashRouter는 githubpage에 넣기 좋음 / BrowserRouter는 어려움
    //Link를 쓰고싶으면 Router 안에 있어야함
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
  );
}

export default App;