import { useState, useEffect } from "react";

/**
 * Timer component demonstrates the use of `useState` for state management
 * and `useEffect` for lifecycle events like mounting and cleanup.
 */
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerID = setInterval(
      () => setSeconds((seconds) => seconds + 1),
      1000
    );

    // Cleanup function to clear the timer on unmount
    return () => clearInterval(timerID);
  }, []); // Empty dependency array ensures this runs only once (on mount)

  return <div>Elapsed Time: {seconds} seconds</div>;
}

export default Timer;
