import React, { useEffect, useState, useRef } from "react";
import '../features/preview/preview.scss';

export const ExperianceTimer = () => {
  const [yearsTimer, setYearsTimer] = useState(0);
  const [feetTimer, setFeetTimer] = useState(0);
  const [workersTimer, setWorkersTimer] = useState(0);
  const [intervals, setIntervals] = useState([]);

  const targetRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTimers();
          } else {
            stopTimers();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
      setIsActive(true);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      stopTimers();
    };
  }, []);

  const startTimers = () => {
    // Start the timers
    const years = setInterval(() => {
      setYearsTimer((prevNum) => (prevNum === 10 ? prevNum : prevNum + 1));
    }, 100);

    const feet = setInterval(() => {
      setFeetTimer((prevNum) => (prevNum === 100000 ? prevNum : prevNum + 1000));
    }, 10);

    const workers = setInterval(() => {
      setWorkersTimer((prevNum) => (prevNum === 25 ? prevNum : prevNum + 1));
    }, 50);

    setIntervals([years, feet, workers]);
  };

  const stopTimers = () => {
    // Stop the timers
    intervals.forEach((interval) => clearInterval(interval));
    setIntervals([]);
  };

  return (
    <div className={`timer ${isActive ? 'timer__active' : ''}`} ref={targetRef}>
      <div className="timer__experiance">
        <span className="timer__nums">{yearsTimer}</span>
        <p className="timer__text">Years of experiance</p>
      </div>
      <div className="timer__experiance">
        <span className="timer__nums">{feetTimer}</span>
        <p className="timer__text">sq ft Done</p>
      </div>
      <div className="timer__experiance">
        <span className="timer__nums">{workersTimer}</span>
        <p className="timer__text">Employees</p>
      </div>
    </div>
  );
};
