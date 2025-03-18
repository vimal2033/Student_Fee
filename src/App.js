
import './App.css';
import { useEffect} from 'react';
import SideNavBar from './components/SideNavBar';
import TopHeaderBar from './components/TopHeaderBar';
import TopBtns from './components/TopBtns';
import DashboardFeeEntry from './components/Page1_deshboard/DashboardFeeEntry';
import AddStudent from './components/Page2_AddStudent/AddStudent';
import PaymentHistory from './components/Page4_PaymentHistory/PaymentHistory';
import SearchStudent from './components/Page3_SearchStudent/SearchStudent';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useMyContext } from './global/MyContext';
function App() {
  
  const {get_student_data}=useMyContext();
 

// now useEffect to call get)student)data function
useEffect(()=> {
  get_student_data();
  // eslint-disable-next-line
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
                {/* //adding Payment history page  */}
                <Route path="/payment-history" element={<PaymentHistory />} />
                {/* //adding Payment history page  */}
                <Route path="/search-student" element={<SearchStudent />} />
              </Routes>
              
          </main>
        </div>
      </div>

      </Router>
     
    </>
    
  );
}

export default App;
