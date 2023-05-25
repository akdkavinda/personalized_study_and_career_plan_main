import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Personality from "./components/Personality";
import Timetable from "./components/Timetable";
import Login from "./components/Login";
import Register from "./components/Register";
import University from "./components/University";
import Plan from "./components/Plan";
import User from "./components/User";
import Bot from "./components/Bot";
import Nav from "./components/nav";
import Footer from "./components/footer";
import ButterToast, { POS_RIGHT, POS_TOP } from "butter-toast";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: "url(/bg.jpg)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat-y',
          width: '100%',
        }}
      >
        <Nav />
        <Switch>
          <Route path="/bot" component={Bot}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/plan" component={Plan}></Route>
          <Route path="/university" component={University}></Route>
          <Route path="/User" component={User}></Route>
          <Route path="/timetable" component={Timetable}></Route>
          <Route path="/Personality" component={Personality}></Route>
          <Route path="/" component={User}></Route>
        </Switch>
        <ButterToast position={{ vertical: POS_TOP , horizontal: POS_RIGHT }} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
