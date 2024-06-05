// src/component/home.jsx
import React, { useState, useEffect, useRef } from "react";
import SecondsCounter from "./SecondsCounter.jsx";
//  import alertSound from "../../assets/alarm_beep-clock-165474.mp3"

const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [isCounting, setIsCounting] = useState(true);
    const [alertTime, setAlertTime] = useState(null);
    const [isCountdown, setIsCountdown] = useState(false);
    const intervalRef = useRef(null);
    //  const audioRef = useRef(new Audio(alertSound));  

    useEffect(() => {
        if (isCounting) {
            intervalRef.current = setInterval(() => {
                setSeconds(prevSeconds => isCountdown ? prevSeconds - 1 : prevSeconds + 1);
            }, 10);
        }

        if (alertTime !== null && seconds === alertTime) {
            //  audioRef.current.play();  
            alert(`Reached the specified time: ${alertTime} seconds`);
        }

        return () => clearInterval(intervalRef.current);
    }, [isCounting, seconds, alertTime, isCountdown]);

    const handleStart = () => setIsCounting(true);
    const handleStop = () => setIsCounting(false);
    const handleReset = () => {
        setIsCounting(false);
        setSeconds(0);
    };

    const handleAlertTimeChange = (e) => {
        setAlertTime(Number(e.target.value));
    };

    const handleCountdownChange = (e) => {
        const countdownValue = Number(e.target.value);
        setIsCountdown(true);
        setSeconds(countdownValue);
    };

    return (
        <div className="text-center">
            <h1 className="text-center mt-5">Seconds Counter</h1>
            <SecondsCounter seconds={seconds} />
            <div className="controls">
                <button onClick={handleStart} className="btn btn-primary">Start</button>
                <button onClick={handleStop} className="btn btn-danger">Stop</button>
                <button onClick={handleReset} className="btn btn-secondary">Reset</button>
            </div>
            <div className="mt-3">
                <label>Set Alert Time: </label>
                <input type="number" onChange={handleAlertTimeChange} />
            </div>
            <div className="mt-3">
                <label>Countdown from: </label>
                <input type="number" onChange={handleCountdownChange} />
            </div>
            <p>
                Made by{" "}
                <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!
            </p>
        </div>
    );
};

export default Home;
