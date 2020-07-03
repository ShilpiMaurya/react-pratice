import React, { useState, useEffect } from "react";
function Learning() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const onButtonClick = () => {
    setCount(count + 1);
  };
  const nameHandler = e => {
    setName(e.target.value);
  };
  const passwordHandler = e => {
    setPassword(e.target.value);
  };
  const mouseHandler = () => {
    console.log("mouse is over me");
  };
  useEffect(() => {
    console.log(`this has been clicked ${count} times`);
    document.addEventListener("mouseover", mouseHandler);
    return () => {
      document.removeEventListener("mouseover", mouseHandler);
    };
  }, [count]);
  return (
    <>
      <h1>welcome back</h1>
      <h4>{count}</h4>
      <button onClick={onButtonClick}>Hooks button</button>
      <br />
      <br />
      <input type="text" onChange={nameHandler} />
      <h5>{name}</h5>
      <br />
      <br />
      <input type="text" onChange={passwordHandler} />
      <h5>{password}</h5>
    </>
  );
}
export default Learning;
