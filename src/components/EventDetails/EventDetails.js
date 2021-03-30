import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const EventDetails = () => {
    const {eventId} = useParams()
    // console.log(eventId)
    const [events, setEvents] = useState([]);
    useEffect(() => {
      fetch("https://whispering-brook-95503.herokuapp.com/events")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            setEvents(data)});
    }, []);
    
    const eventData = events.find(event => event._id === eventId)
    
    return (
        <div>
            <img className="w-25" src={eventData?.img} alt=""/>
            <h3>{eventData?.name}</h3>
        </div>
    );
};

export default EventDetails;