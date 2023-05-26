'use client';
import { useState } from 'react';

export default function TestButton(data: any) {
  const [age, setAge] = useState(28);

  function handleClick() {
    setAge(age + 1);
  }
  return (
    <button onClick={handleClick}>
      Clicked {age} Age {data.value}
    </button>
  );
}
