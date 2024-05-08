import { useState } from "react";
import WarningBanner from "./WarningBanner";

export default function MainPage(props) {
  const [showWarning, setShowWarning] = useState(false);

  const handleToggleClick = () => {
    setShowWarning((preShowWarning) => !preShowWarning);
  };

  return (
    <>
      <WarningBanner warning={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? "보이기" : "감추기"}
      </button>
    </>
  );
}
