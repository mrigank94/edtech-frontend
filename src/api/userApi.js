import * as utilsApi from "./utils-api";

/**
 * Function to log into the application
 * @param {Object}
 * 		email key
 * 		password key
 * @param {Function} successCallback - callback method to be called when API succeeds
 * @param {Function} failureCallback - callback method to be called when API fails
 */
export async function doLogin(
  { email, password },
  successCallback,
  failureCallback
) {
  if (email && password) {
    const userData = {
      email: email,
      password: password,
    };

    try {
      await utilsApi.sendApiRequest(
        utilsApi.constants.HTTP_METHOD.POST,
        "/login",
        null,
        null,
        userData,
        null,
        successCallback,
        failureCallback
      );
    } catch (error) {
      if (failureCallback) {
        failureCallback(error);
      }
    }
  }
}

/**
 * Function to sign up in the application
 * @param {Object}
 * 		firstName key
 * 		lastName key
 * 		email key
 * 		password key
 * @param {Function} successCallback - callback method to be called when API succeeds
 * @param {Function} failureCallback - callback method to be called when API fails
 */
export async function doSignup(
  { firstName, lastName, email, password },
  successCallback,
  failureCallback
) {
  if (email && password) {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    try {
      await utilsApi.sendApiRequest(
        utilsApi.constants.HTTP_METHOD.POST,
        "/sign-up",
        null,
        null,
        userData,
        null,
        successCallback,
        failureCallback
      );
    } catch (error) {
      if (failureCallback) {
        failureCallback(error);
      }
    }
  }
}

/**
 * Function to log out of the application
 * @param {String} userId - ID of the user currently logged in
 * @param {Function} successCallback - callback method to be called when API succeeds
 * @param {Function} failureCallback - callback method to be called when API fails
 */
export async function doLogout(userId, successCallback, failureCallback) {
  if (userId) {
    const userData = {
      id: userId,
    };

    try {
      await utilsApi.sendApiRequest(
        utilsApi.constants.HTTP_METHOD.POST,
        "/logout",
        null,
        null,
        userData,
        null,
        successCallback,
        failureCallback
      );
    } catch (error) {
      if (failureCallback) {
        failureCallback(error);
      }
    }
  }
}
