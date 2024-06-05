// src/component/SecondsCounter.jsx
import React from "react";

function SecondsCounter(props) {
    const { seconds } = props;

    const getDigit = (num, place) => {
        return Math.floor(num / place) % 10;
    };

    return (
        <div className="clock-container">
            <div className="clock-icon">
                <i className="fas fa-clock"></i>
            </div>
            <div className="digit">{getDigit(seconds, 100000)}</div>
            <div className="digit">{getDigit(seconds, 10000)}</div>
            <div className="digit">{getDigit(seconds, 1000)}</div>
            <div className="digit">{getDigit(seconds, 100)}</div>
            <div className="digit">{getDigit(seconds, 10)}</div>
            <div className="digit">{getDigit(seconds, 1)}</div>
        </div>
    );
}

export default SecondsCounter;
