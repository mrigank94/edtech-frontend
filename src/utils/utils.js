/**
 * Function to check if datatype of a given value is of reference type
 * @param {*} value - value to be checked
 * @returns {Boolean} - true if the given value is reference type; false otherwise
 */
const checkReferenceType = (value) => {
  if (value) {
    return typeof value === "object" || typeof value === "function";
  }
  return false;
};

/**
 * Function to get formatted date as: April 20, 2021 from an ISO date string
 * @param {String} isoDate - ISO date string to be formatted
 * @returns {String} - formatted date string
 */
export const getFormattedDate = (isoDate) => {
  if (isoDate) {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Date(isoDate).toLocaleDateString("en-US", options);
  }
  return "";
};

/**
 * Function to check if given email is valid
 * @param {String} email - email to be checked
 * @returns {Boolean} - true if email is valid; false otherwise
 */
export const checkValidEmail = (email) => {
  if (email) {
    // Credits - https://stackoverflow.com/a/46181/7452548
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email.toString().toLowerCase());
  }
  return false;
};

/**
 * Function to check if given value contains only numbers
 * @param {String} value - value to be checked
 * @returns {Boolean} - true if value is numerical; false otherwise
 */
export const checkIsNumerical = (value) => {
  if (value) {
    const regex = /^[0-9]*$/;
    return regex.test(value.toString());
  }
  return false;
};

/**
 * Function to set local storage with given key-value pair
 * @param {*} key - unique identifier (datatype is not reference type)
 * @param {*} value - value corresponding to the key
 */
export const setInLocalStorage = (key, value) => {
  if (!checkReferenceType(key) && value) {
    if (checkReferenceType(value)) {
      localStorage.setItem(key.toString(), JSON.stringify(value));
    } else {
      localStorage.setItem(key.toString(), value.toString());
    }
  }
};

/**
 * Function to remove given key from local storage
 * @param {*} key - unique identifier
 */
export const removeFromLocalStorage = (key) => {
  if (key) {
    localStorage.removeItem(key);
  }
};

/**
 * Function to get formatted time represented in hours and minutes
 * @param {number} minutes - unique identifier (datatype is not reference type)
 * @returns {String} formatted time if minutes exist; "NA" otherwise
 *    Example: 2h 30m
 */
export const getFormattedTimeInHoursAndMinutes = (minutes) => {
  if (minutes) {
    minutes = +minutes; // convert string to number (type safe for further calculations)
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) {
      return `${mins}m`;
    }
    if (mins === 0) {
      return `${hours}h`;
    }
    return `${hours}h ${mins}m`;
  }
  return "NA";
};
