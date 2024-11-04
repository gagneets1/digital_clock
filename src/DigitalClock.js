import React, { useEffect, useState } from 'react';
import './DigitalClock.css'; 

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString(); // Format the time to a readable string
    };

    return (
        <div className="clock-container">
            <h1 className="title">Digital Clock</h1>
            <h2 className="clock">{formatTime(time)}</h2>
        </div>
    );
};

export default DigitalClock;