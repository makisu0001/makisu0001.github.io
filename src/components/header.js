import React from "react"
import {Link} from 'react-router-dom';
import "../assets/css/header.css"
export default class Home extends React.Component{
	render(){
		return (
			<div className="header">
				<ul className="nav">
    	    		<li><Link to="/">Home</Link></li>
    	  		 	<li><Link to="/note">Note</Link></li>
    	  		 	<li><Link to="/me">About Me</Link></li>
    	  		 	<li><Link to="/contact">Contact</Link></li>
    	  		</ul>
    	  		<ul className="nav">
    	    		<li><Link to="/">Home</Link></li>
    	  		 	<li><Link to="/">Page</Link></li>
    	  		</ul>
			</div>
		)
	}
}