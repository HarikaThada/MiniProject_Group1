import React,{useState} from "react";
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img from './Images/img1.jpg';
import { Link, useHistory } from "react-router-dom";

function RoomPage() {
	let history = useHistory();
	const [name, setName] = useState(() => {
		// getting stored value
		const saved = localStorage.getItem("name");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
		
	  });
	//function  logout() {
      //  localStorage.clear();
       // window.location.href = '/';
   // }
  return (
    <div className="room">
		<h4 className="username">UserName:{name}</h4>

<a href='http://localhost:3000'>
      <button>logout</button>
    </a>
      <h1>ROOM PAGE</h1>
      
      <img src={img} alt="img"></img>
      <div class="main">
			<div class="column">
               <div class="heading"><h2>Meet room1</h2></div>
	          <img src={img1} alt="image1"/>
	          <div><h4>Discover 8,578 square feet of total venue space, with nine meeting and conference rooms in Bangalore.Our event rooms boast modern AV technology, high-speed Wi-Fi and multiple breakout venues</h4></div>
	          
	          <a href="#">select</a>	          
	       </div>
	   <div class="column">
	   	<div class="heading"><h2>Meet room2</h2></div>
	     <img src={img2} alt="image1"/>
	     <div><h4>The decisions made in a conference room can be some of the most important ones your staff makes. That should happen in a space that is clean, bright and lends itself to effective work and communication.</h4></div>
          <a href="#">select</a>
	   </div>
	   <div class="column">
	     <div class="heading"><h2>Meet room3</h2></div>
	     <img src={img3} alt="image1"/>
	     <div><h4>The Meeting Room in Hyderabad on rent fully equipped and is available on an hourly basis is ideal for team review meetings, client presentations etc. The city has many startups and IT companies. It is a developing city.</h4></div>
	      <a href="#">select</a>
	   </div>
       </div>
    </div>
  );
}
export default RoomPage;