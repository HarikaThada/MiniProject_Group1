
import './App.css';
import Register from './Component/Register';
import Login from './Component/Login';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Services from './Component/Services';
//import HomePage from './Component/RoomPage';
import Room from './Component/Room';
import About from './Component/About';
import Contact from './Component/Contact';
function App() {
  return (
    <div className="App">
        

<ul>
  <li><a href="/" class="active">CONFERENCE ROOM</a></li>
  <li><a href="/services">Service</a></li>
  <li><a href="/contact">Contact</a></li>
  <li><a href="/about">About</a></li>
</ul>

      
     <BrowserRouter>
     <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/services" component={Services}/>
        <Route path="/register" component={Register}/>
        <Route path="/home" component={Room}/>
        {/* <Route path="/home" component={HomePage}/> */}
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>

     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
