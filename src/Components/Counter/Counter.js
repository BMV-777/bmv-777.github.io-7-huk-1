import React, { useState, useEffect } from 'react';

const styled = {};

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handelCounterAIncrement = () => {
    setCounterA(prevCounterA => prevCounterA + 1);
  };
  const handelCounterBDecrement = () => {
    setCounterB(prevCounterB => prevCounterB - 1);
  };

  useEffect(() => {
    console.log(counterA + ' Привет', +counterB + Date.now());
  }, [counterA, counterB]);

  return (
    <>
      <button
        styled={styled.btm}
        type="button"
        onClick={handelCounterAIncrement}
      >
        Кликнул counterA {counterA} раз
      </button>
      <button
        stuled={styled.btm}
        type="button"
        onClick={handelCounterBDecrement}
      >
        Кликнул counterB {counterB} раз
      </button>
    </>
  );
}
