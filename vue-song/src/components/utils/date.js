/**
 * Return a readable string to display dates
 * @param date
 * @returns {string}
 */
export function displayDate(date){
    return (getReadableNumber(date.getDay() + 1)) + '/' + (getReadableNumber(date.getMonth() + 1))
        + '/' + date.getFullYear() + ' à ' + date.getHours() + ':' + date.getMinutes();
}

/**
 * Add a '0' if the given number is < 10
 * @param number
 * @returns {string}
 */
function getReadableNumber(number){
    return number > 9 ? number : '0' + number;
}