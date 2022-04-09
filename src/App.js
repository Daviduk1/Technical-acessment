import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";

import Company from './Pages/Company';
import Features from './Pages/Features';
import Help from './Pages/Help';
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";
import Footer from './components/Footer';
import LoginDashboard from './components/assets/LoginDashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        
        <Route path='/'element={<Company />} />
        <Route path='/features'element={<Features />} />
        <Route path='/help'element={<Help />} />
        <Route path='/signup'element={<SignUp />} />
        <Route path='/login'element={<Login />} />
        <Route path='/dashboard'element={<LoginDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
