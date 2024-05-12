import { useState } from "react";
import styles from "./Timer.module.css";
import { useRef } from "react";
import { useEffect } from "react";

export default function Timer() {
  const [isRunning, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    setRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };
  const handleStop = () => {
    setRunning(false);
  };
  const handleReset = () => {
    setRunning(false);
    setElapsedTime(0);
  };

  const getTime = () => {
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    return `${zeroPad(minutes)}:${zeroPad(seconds)}:${zeroPad(milliseconds)}`;
  };

  const zeroPad = (time) => {
    return String(time).padStart(2, "0");
  };

  return (
    <div className={styles.timer}>
      <span className={styles.time}>{getTime()}</span>
      <div className={styles.buttons}>
        <button
          className={`${styles.btn} ${styles.start}`}
          onClick={handleStart}
        >
          START
        </button>
        <button className={`${styles.btn} ${styles.stop}`} onClick={handleStop}>
          STOP
        </button>
        <button
          className={`${styles.btn} ${styles.reset}`}
          onClick={handleReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
