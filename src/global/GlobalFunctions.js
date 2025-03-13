//creating global functions to be accessible in all components

// set default date to today
export const setToday=()=>{
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    // Ensure two digits for month and day
    if (month < 10) { month = '0' + month; }
    if (day < 10) { day = '0' + day; }
    const formattedDate = `${year}-${month}-${day}`; // Use YYYY-MM-DD format which is default for input type date
    return formattedDate;
  }