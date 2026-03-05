// Utility Helper Functions

/**
 * Returns the current date and time in the specified format.
 * @param format - The desired format of the date and time.
 * @returns The formatted current date and time.
 */
function getCurrentDateTime(format: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    const dateTime = new Date().toLocaleString('sv-SE', options);
    return dateTime;
}

/**
 * Generates a random ID.
 * @returns A unique random ID.
 */
function generateRandomId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

/**
 * Logs a message to the console with a timestamp.
 * @param message - The message to log.
 */
function logWithTimestamp(message: string): void {
    console.log(`[${getCurrentDateTime('YYYY-MM-DD HH:MM:SS')}] ${message}`);
}

export { getCurrentDateTime, generateRandomId, logWithTimestamp };