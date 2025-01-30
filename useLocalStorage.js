import { useState, useEffect } from "react";
/**
 * Custom hook to manage state with localStorage persistence.
 *
 * @param {string} key - The key to store the value in localStorage.
 * @param {*} initialValue - The initial value if no stored value exists.
 * @returns {[any, Function]} - Returns the stored value and a setter function.
 *
 * @example
 * const [name, setName] = useLocalStorage("username", "Guest");
 * setName("John"); // Updates both state and localStorage
 */
const useLocalStorage = (key = "", initialValue = "") => {
  const [storageValue, setStorageValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    if (key) {
      localStorage.setItem(key, JSON.stringify(storageValue));
    }
  }, [key, storageValue]);

  return [storageValue, setStorageValue];
};

export default useLocalStorage;
