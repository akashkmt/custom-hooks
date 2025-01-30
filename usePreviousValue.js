import { useEffect, useRef } from "react";
/**
 * Custom hook to keep track of the previous value of a given state or prop.
 *
 * @param {*} value - The current value to track.
 * @returns {*} - The previous value before the last update. Initially, it will be undefined.
 *
 * @example
 * const prevCount = usePreviousValue(count);
 * console.log(prevCount); // Logs the previous count value
 */
const usePreviousValue = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePreviousValue;
