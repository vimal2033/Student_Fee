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

   //submit payment details (removed async await)
 export const submit_Payment=(id,name,course,fee,date)=>{
  const url = "https://script.google.com/macros/s/AKfycbxpzloOf5uY3hrlCiCqFo-OdqwlEDuRzUGYjHQcsJEYhSoa-JPct9voSW8Igjte07a7Kw/exec";

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({STUDENT_ID:id, STUDENT_NAME: name, COURSE: course,FEE_RECIVED:fee,DATE:date })
  })
  .then(() => {
    console.log("Data sent successfully!");
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

