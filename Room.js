import React, { useState } from "react";
import Axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Room() {
  const [date, setDate] = useState((""));

  const addBooking1 = () => {
    Axios.post("http://localhost:3001/booking", {
        date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear(),
        roomId: '1',
       // uId: Id id needed to passed from login page to current page
    }).then(() => {
        console.log("Success adding")
    });
  }

  const addBooking2 = () => {
    Axios.post("http://localhost:3001/booking", {
        date:date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(),
        roomId: '2',
        //uId: Id id needed to passed from login page to current page
    }).then(() => {
        console.log("Success adding")
        alert(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+"booking")
    });
  }

  const addBooking3 = () => {
    
    Axios.post("http://localhost:3001/booking", {
        date: date,
        roomId: '3',
        //uId: Id id needed to passed from login page to current page
    }).then(() => {
        console.log("Success adding")
    });
  }

  const addBooking4 = () => {
    Axios.post("http://localhost:3001/booking", {
        date: date,
        roomId: '4',
        //uId: Id id needed to passed from login page to current page
    }).then(() => {
        console.log("Success adding")
    });
  }


  return (
    <div>
      
      <h1 style={{textAlign:'center'}} >Confrence Rooms</h1>

      <div style={{textAlign:'center',display:'flex',alignItems:'center',flexWrap:'wrap',flexDirection:'row',justifyContent:'center'}}>
        
        <div style={{textAlign:'center',width:500,margin:20,padding:20}} >
          <img alt='' class="img1" src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmVyZW5jZSUyMHJvb218ZW58MHx8MHx8&w=1000&q=80" width="400" height="400" />
         <p>Select Date</p> <DatePicker selected={date} onChange={date => setDate(date)} />
          <button id="btn1" type="button" onClick={addBooking1}>BOOK</button>
        </div>

        <div style={{textAlign:'center',width:500,margin:20,padding:20}} >
          <img alt='' class="img1" src="https://i.ibb.co/sF9sNGT/pexels-dayvison-de-oliveira-silva-5696291.jpg" width="400" height="400" />
          <p>Select Date</p><DatePicker selected={date} onChange={date => setDate(date)} />
          <button id="btn2" type="button"onClick={addBooking2}>BOOK</button>
        </div>

        <div style={{textAlign:'center',width:500,margin:20,padding:20}} >
          <img alt='' class="img1" src="https://i.ibb.co/cQ3Pq4F/pexels-pixabay-159806.jpg" width="400" height="400" />
          <p>Select Date</p><DatePicker selected={date} onChange={date => setDate(date)} />
          <button id="btn3" type="button"onClick={addBooking3}>BOOK</button>
        </div>

        <div style={{textAlign:'center',width:500,margin:20,padding:20}} >
          <img alt='' class="img1" src="https://i.ibb.co/x2p0SW3/pexels-pixabay-236730.jpg" width="400" height="400" />
          <p>Select Date</p><DatePicker selected={date} onChange={date => setDate(date)} />
          <button id="btn4" type="button"onClick={addBooking4}>BOOK</button>
        </div>
      
      </div>

    </div>
  );
}

export default Room;
