import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Articles from "./Articles.js";
import Presentations from "./Presentations.js";
import { Switch, Route } from 'react-router-dom';
import Announcements from "./Announcements.js";
import Contact from "./Contact.js";
import "./Transition.css";

function App() {
  return (
    <>
      <Header />

      <Switch>

        <Route path="/" exact component={Home}/>
        <Route path="/hakkimda" component={About} />
        <Route path="/yazilar" component={Articles} />
        <Route path="/sunumlar" component={Presentations} />
        <Route path="/duyurular" component={Announcements} />
        <Route path="/iletisim" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
