/**
 * Formats a date string to "DD MMMM YYYY" format and calculates the number of days from the provided date to the current date.
 * 
 * @param {string} dateString - The date string to be formatted and used for calculation.
 * @returns {[string, number]} - An array containing the formatted date and the number of days from the provided date to today.
 */
function formatDateAndCalculateDays(dateString) {
    const providedDate = new Date(dateString);
  
    // Convert the date to the desired format
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = providedDate.toLocaleDateString('en-GB', options);
  
    // Calculate the number of days from the provided date to the current date
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - providedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    return [formattedDate, diffDays];
}

function getVerificationStatus(isVerified) {
    if(isVerified) {
        return "verified";
    }
    else {
        return "nonVerified";
    }
}

module.exports = { formatDateAndCalculateDays, getVerificationStatus };
