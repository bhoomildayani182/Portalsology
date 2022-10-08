import './App.css';
import Dashboard from './Component/Dashboard';
import Home from './Component/Home';
import InstituteLogin from './Component/InstituteLogin';
import Navigaitonbar from './Component/Navigaitonbar';
import Signup from './Component/DTELogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List_Institute from "./Component/List_Institute";
import List_order from "./Component/List_order";
import Add_item from "./Component/Add_item"; 
import Upper from './Component/Upper';
import Below from './Component/Below';
import PlaceOrder from './Component/PlaceOrder';
import PlacedOrder from './Component/PlacedOrder';
import InstituteDashboard from './Component/InstituteDashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigaitonbar/>

      <Routes>
        <Route path="/institutelogin" element={<InstituteLogin />} />
        <Route path="/dtelogin" element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path="home" element={<Home />} />
          <Route path="below" element={<Below />} />
          <Route path="upper" element={<Upper />} />
          <Route path="additem" element={<Add_item />} />
          <Route path="institute" element={<List_Institute />} />
          <Route path="orderlist" element={<List_order />} />
        </Route>
        <Route path='/institutedeshboard' element={<InstituteDashboard />} >
          <Route path="home" element={<Home />} />
          <Route path="below" element={<Below />} />
          <Route path="upper" element={<Upper />} />
          <Route path="placeorder" element={<PlaceOrder />} />
          {/* <Route path="institute" element={<List_Institute />} /> */}
          <Route path="placedorder" element={<PlacedOrder />} />
        </Route>
      </Routes>
      </BrowserRouter>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
