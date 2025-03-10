  //get data from server
  async function get_student_data() {
    const url = "https://script.google.com/macros/s/AKfycbyQYPanEzA02zR0x5-T6BefsmQcN-EIZNCXvYG1nCWt6Iu4wi82yLnyqJJWYrOqyFb9/exec";
  
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      console.log("GET Response:", data);
      // document.getElementById("app").textContent = JSON.stringify(data[0].data[0].name);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  //send data to server
  async function send_student_data() {
    const url = "https://script.google.com/macros/s/AKfycbyQYPanEzA02zR0x5-T6BefsmQcN-EIZNCXvYG1nCWt6Iu4wi82yLnyqJJWYrOqyFb9/exec";
  
    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "raju", number: "99999999" })
      });
      console.log("Data sent successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  }