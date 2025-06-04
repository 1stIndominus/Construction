import { useEffect, useState, useRef, FC } from "react";
import "./experianceTimer.scss";

export const ExperianceTimer: FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const [yearsTimer, setYearsTimer] = useState<number>(0);
  const [feetTimer, setFeetTimer] = useState<number>(0);
  const [workersTimer, setWorkersTimer] = useState<number>(0);
  const [intervals, setIntervals] = useState<NodeJS.Timeout[]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const blockElement = targetRef.current;
    if (!blockElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = setTimeout(() => {
              startTimers();
            }, 1000);
            setTimeoutId(id);

            blockElement.classList.add("active");
          } else {
            stopTimers();
            blockElement.classList.remove("active");
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(blockElement);

    return () => {
      observer.unobserve(blockElement);
      stopTimers();
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const startTimers = () => {
    const years = setInterval(() => {
      setYearsTimer((prevNum) => (prevNum === 10 ? prevNum : prevNum + 1));
    }, 100);

    const feet = setInterval(() => {
      setFeetTimer((prevNum) =>
        prevNum === 100000 ? prevNum : prevNum + 1000
      );
    }, 10);

    const workers = setInterval(() => {
      setWorkersTimer((prevNum) => (prevNum === 25 ? prevNum : prevNum + 1));
    }, 50);

    setIntervals([years, feet, workers]);
  };

  const stopTimers = () => {
    intervals.forEach((interval) => clearInterval(interval));
    setIntervals([]);
  };

  return (
    <div className={`timer`} ref={targetRef}>
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
