import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intercalId = setInterval(() => {
      const now = new Date();
      setTime({
        hours: now.getHours() % 12 || 12,
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(intercalId);
  }, []);

  return (
    <>
      <main>
        <div
          className="hours"
          style={{
            transform: `rotateZ(${time.hours * 30}deg)`,
          }}
        >
          <p>{time.hours}</p>
          <p>{time.hours}</p>
          <p>{time.hours}</p>
        </div>
        <div
          className="minutes"
          style={{
            transform: `rotateZ(${time.minutes * 6}deg)`,
          }}
        >
          <p>{time.minutes}</p>
          <p>{time.minutes}</p>
          <p>{time.minutes}</p>
          <p>{time.minutes}</p>
          <p>{time.minutes}</p>
        </div>
        <div
          className="seconds"
          style={{ transform: `rotateZ(${time.seconds * 6}deg)` }}
        >
          <p>{time.seconds}</p>
          <p>{time.seconds}</p>
          <p>{time.seconds}</p>
          <p>{time.seconds}</p>
          <p>{time.seconds}</p>
          <p>{time.seconds}</p>
        </div>
      </main>
    </>
  );
}

export default App;
