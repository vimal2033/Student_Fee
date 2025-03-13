
import './App.css';
import { useEffect,useState } from 'react';
import SideNavBar from './components/SideNavBar'
import TopHeaderBar from './components/TopHeaderBar'
import DashboardFeeEntry from './components/Page1_deshboard/DashboardFeeEntry'
import TopBtns from './components/TopBtns'
import AddStudent from './components/Page2_AddStudent/AddStudent';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useMyContext } from './ContextApi/MyContext';
function App() {
  
  const {setstudata}=useMyContext();
  async function get_student_data() {
  const url = "https://script.google.com/macros/s/AKfycbxpzloOf5uY3hrlCiCqFo-OdqwlEDuRzUGYjHQcsJEYhSoa-JPct9voSW8Igjte07a7Kw/exec";

  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    console.log("GET Response:", data);
    setstudata(data[0].data);
  
    // document.getElementById("app").textContent = JSON.stringify(data[0].data[0].name);
  } catch (error) {
    console.error("Error:", error);
  }
}


// now useEffect to call get)student)data function
useEffect(()=> {
  get_student_data();
}, []);

  return (
    <>
   
    <Router>
   
      <div className="min-h-screen flex">
        <div className="collapse lg:visible ">
          {/* <!-- side nevigation bar --> */}
          <SideNavBar />
        </div>
        <div className="flex-1  lg:ml-64">
          {/* <!-- header of the web page --> */}
          <TopHeaderBar />

          {/* <!-- main content of the web page -->    */}
          <main className="p-6">
            
            {/* <!-- creating buttons for add new student, record payment, generate receipt and search student --> */}
            <TopBtns />
 
              <Routes>
                {/* //adding deshboard component with free entry as default page */}
                <Route path="/" element={<DashboardFeeEntry />} />
                {/* //adding add new student page  */}
                <Route path="/add-student" element={<AddStudent />} />
              </Routes>
              
          </main>
        </div>
      </div>

      </Router>
     
    </>
    
  );
}

export default App;
