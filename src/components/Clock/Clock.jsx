import { useState } from "react";
import styles from "./Clock.module.css";
import { useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  const getTime = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (time) => {
    return String(time).padStart(2, "0");
  };

  useEffect(() => {
    const timeID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timeID);
    };
  }, []);

  return (
    <div className={styles.clock}>
      <span className={styles.time}>{getTime()}</span>
    </div>
  );
}
