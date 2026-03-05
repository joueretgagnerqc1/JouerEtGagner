// Input validation utilities

/**
 * Checks if a string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if valid, otherwise false.
 */
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

/**
 * Checks if a string is a valid phone number.
 * @param {string} phone - The phone number to validate.
 * @returns {boolean} True if valid, otherwise false.
 */
function isValidPhoneNumber(phone) {
    const regex = /^\+?[1-9]\d{1,14}$/;
    return regex.test(phone);
}

/**
 * Checks if a string is a valid URL.
 * @param {string} url - The URL to validate.
 * @returns {boolean} True if valid, otherwise false.
 */
function isValidURL(url) {
    const regex = /^(https?:\/\/)?([\w.-]+\.[a-zA-Z]{2,})([\/\w.-]*)*\/?$/;
    return regex.test(url);
}

// Exporting validation functions
module.exports = { isValidEmail, isValidPhoneNumber, isValidURL };