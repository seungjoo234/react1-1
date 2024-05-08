import { useState } from "react";

export default function Toggle(props) {
  const [isToggleOn, setisToggleOn] = useState(true);

  const handleClick = () => {
    setisToggleOn((isToggleOn) => !isToggleOn);
  };
  return <button onClick={handleClick}>{isToggleOn ? "켜짐" : "꺼짐"}</button>;
}
