import React, { useState } from "react";
import "./Feedback.css";
import { Button } from "@chakra-ui/react";

const Feedback = () => {
  const [isClosed, setIsClosed] = useState(false);

  const toggleCloseButton = () => {
    setIsClosed(!isClosed);
  };

  if (isClosed) {
    return null;
  }

  return (
    <div className="feedback-container">
      <Button
        as="a"
        href="https://umbc.co1.qualtrics.com/jfe/form/SV_4JHzWf3InGequGO"
        target="_blank"
        colorScheme="blue"
        className="feedback-button"
      >
        Give Feedback
      </Button>
      <button className="close-button" onClick={toggleCloseButton}>
        ×
      </button>
    </div>
  );
};

export default Feedback;
