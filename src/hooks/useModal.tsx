import { useState } from "react";

function useModal() {
  const [isShowing, setIsShowing] = useState(false);

  const toggleShowing = () => {
    setIsShowing(!isShowing);
  };

  return { isShowing, toggleShowing };
}

export default useModal;
