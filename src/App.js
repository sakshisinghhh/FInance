// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/Home';
import LoanApplication from './pages/LoanApplication';
import FinancialLiteracy from './pages/FinancialLiteracy';

import Community from './pages/Community';
import MentorDashboard from './components/MentorDashboard';
import CommunityForums from './components/CommunityForums';
import LoanAnalytics from './components/LoanAnalytics';
import Footer from './components/Footer';
import BudgetTools from './pages/BudgetTool';

import LenderDashboard from './components/LenderDashBoard';
import SignIn from './pages/SignIn';
import ApplicationManagement from './pages/AplicationManagement';



function App() {
  const isAuthenticated = false;
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
       
      <Route path="/loan-application" element={<LoanApplication />} />
      <Route path="/financial-literacy" element={<FinancialLiteracy />} />
      <Route path="/budget-tool" element={<BudgetTools />} />
      <Route path="/community" element={<Community />} />
      
      <Route path="/sign-in" element={<SignIn />} />
        <Route 
          path="/leader-dashboard" 
          element={isAuthenticated ? <LenderDashboard /> : <SignIn />} 
        />
        <Route 
          path="/mentor-dashboard" 
          element={<MentorDashboard/>} 
        />

      <Route path="/community-forums" element={<CommunityForums />} />
      <Route path="/loan-analytics" element={<LoanAnalytics />}/>
      <Route path="/mentor-dashboard" element={<MentorDashboard />} />
      <Route path="/application-management" element={<ApplicationManagement />} />

      <Route path="/lender-dashboard" element={<LenderDashboard/>}/>
     
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;


