import React, { useEffect, useState } from "react";
import Event from "../Event/Event";

const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://whispering-brook-95503.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        {events.map((event) => (
          <Event events={event} key={event._id}></Event>
        ))}
      </div>
    </div>
  );
};

export default Home;
