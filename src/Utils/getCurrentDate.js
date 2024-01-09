export function getCurrentDate() {
    // Get current date
    const currentDate = new Date();
  
    // Days of the week (0-6, where 0 is Sunday and 6 is Saturday)
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
  
    // Months (0-11, where 0 is January and 11 is December)
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = months[currentDate.getMonth()];
  
    // Get day of the month (1-31)
    const date = currentDate.getDate();
  
    // Get the year (four digits)
    const year = currentDate.getFullYear();
  
    // Display the result
    return `${dayOfWeek}, ${month} ${date}, ${year}`;
  }
  
  // Call the function
//   getCurrentDate();
  