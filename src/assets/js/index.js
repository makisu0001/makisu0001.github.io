import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "../../components/header.js"
import Home from "../../components/home.js"
import Note from "../../components/note.js"
import AboutMe from "../../components/aboutme.js"
import Contact from "../../components/contact.js"
import "../../assets/css/global.css"

const element = (
    <Router>
    	<div className="root">
    	  <Header />
          <div className="body">
            <Route exact path="/" component={Home}/>
            <Route path="/note" component={Note}/>
            <Route path="/me" component={AboutMe}/>
            <Route path="/contact" component={Contact}/>
          </div>
    	</div>
  	</Router>
);

ReactDOM.render(
	element,
  	document.getElementById('app')
);
