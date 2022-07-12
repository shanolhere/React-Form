import React, { useState, useRef } from "react";
import "./AddForm.css";

// Refs are used to access the references of raw dom elements
const AddForm = ({ addEvent }) => {
  // const [text, setText] = useState("");
  // const [date, setDate] = useState("");
  const [location, setLocation] = useState("manchester");
  const title = useRef();
  const date = useRef();
  const reset = () => {
    // setText("");
    // setDate("");
    title.current.value = "";
    date.current.value = "";
    setLocation("");
  };

  const submit = (e) => {
    e.preventDefault();
    // console.log(title, date);
    const event = {
      title: title.current.value,
      date: date.current.value,
      location: location,
      id: Math.floor(Math.random() * 10000)
    };
    addEvent(event);
    // console.log(event);
    //console.log(title.current.value, date.current.value);
    reset();
  };

  return (
    <>
      <form className="form">
        <div className="text">
          <label>Add Title</label>
          <input type="text" ref={title} />
        </div>
        <br />
        <div className="date">
          <label>Add Date</label>
          <input type="date" ref={date} />
        </div>
        <br />
        {/* <p>
          text - ref={title} and date picked - ref={title}
        </p> */}
        <br />

        <label>Venue Location:</label>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option type="location" value="manchester">
            Manchester
          </option>
          <option type="location" value="sydney">
            Sydney
          </option>
          <option type="location" value="austria">
            Austria
          </option>
        </select>
        <br />
        <div className="btns">
          <input type="submit" onClick={submit} />
          <input type="reset" onClick={reset} />
        </div>
        <br />
      </form>
    </>
  );
};

export default AddForm;
