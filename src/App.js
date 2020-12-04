import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar.js";
import About from "./pages/About.js";
import Articles from "./pages/Articles.js";
import Presentations from "./pages/Presentations/Presentations.js";
import { Switch, Route } from "react-router-dom";
import Announcements from "./pages/Announcements.js";
import Contact from "./pages/Contact.js";
import "./pages/Transition.css";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hakkimda" component={About} />
          <Route path="/yazilar" component={Articles} />
          <Route path="/sunumlar" component={Presentations} />
          <Route path="/duyurular" component={Announcements} />
          <Route path="/iletisim" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
