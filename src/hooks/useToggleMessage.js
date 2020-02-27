import { useState } from 'react';

const useToggleMessage = (initialState = false) => {
  const [message] = useState("AHOJ !!! !!! ???")
  const [isOpen, setIsOpen] = useState(initialState)

  return {
    message,
    isOpen,
    setIsOpen,
  }
}

export default useToggleMessage