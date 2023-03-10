import { useState, useEffect } from 'react';

// const styled = {};

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handelCounterAIncrement = () => {
    setCounterA(prevCounterA => prevCounterA + 1);
  };
  const handelCounterBDecrement = () => {
    setCounterB(prevCounterB => prevCounterB + 1);
  };

  useEffect(() => {
    const totalClick = counterA + counterB;
    document.title = `Hello${totalClick}`;
  }, [counterA, counterB]);

  // useEffect(() => {
  //   console.log(counterB + ' Rita Привет!' + Date.now());
  // }, [counterB]);

  return (
    <>
      <button type="button" onClick={handelCounterAIncrement}>
        Кликнул counterA Rita нажала {counterA} раз
      </button>
      <button type="button" onClick={handelCounterBDecrement}>
        Кликнул counterB Rita нажала {counterB} раз
      </button>
    </>
  );
}
