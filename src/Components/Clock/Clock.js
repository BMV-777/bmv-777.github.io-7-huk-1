import { useState, useEffect, useRef } from 'react';

const styles = {
  clockface: {
    fontSize: 64,
    fontWeight: 500,
    textAlign: 'center',
  },
};

export default function Clock() {
  const [time, setTime] = useState(new Date());

  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };
  const play = () => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
  };

  return (
    <>
      <p style={styles.clockface}>Текущие время: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
      <button type="button" onClick={play}>
        Play
      </button>
    </>
  );
}
