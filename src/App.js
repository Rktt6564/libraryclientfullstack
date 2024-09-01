// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SharedContent from './components/SharedContent';
import StudentDashboard from './components/StudentDashboard'; 
import HiPage from './pages/HiPage';
import RulesPage from './pages/RulesPage';
import CollectionPage from './pages/CollectionPage';
import UsefulLinks from './pages/UsefulLinks';
import MembershipPage from './pages/MembershipPage';
import CatalogueOPACPage from './pages/CatalogueOPACPage';
import ContactUsPage from './pages/ContactUsPage';
import './styles.css';
import StudentLogin from './components/StudentLogin';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AddBook from './components/admin/AddBook';
import Profiles from './components/admin/Profiles';
import MyProfile from './components/Student/MyProfile';
import MyBook from './components/Student/MyBook';
import BookHistory from './components/Student/BookHistory';
import BookRequests from './components/admin/BookRequests';
import Transaction from './components/Student/Transaction';
import Bills from './components/admin/Bills';
import RecentAddedBooks from './components/RecentAddedBooks';
// import ButtonsRow from './components/ButtonsRow';

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<SharedContent />} />
        <Route path="/hi" element={<HiPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/links" element={<UsefulLinks />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/catalogue-opac" element={<CatalogueOPACPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        {/* Add routes for other pages as needed */}
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/admin_login" element={<AdminLogin/>} />
        <Route path='/AdminDashboard' element={<AdminDashboard /> }/>
        <Route path='admin/AddBook' element={<AddBook />}/>
        {/* <Route path='admin/Profiles' element={<Profile />}/> */}
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path='student/MyProfile' element={<MyProfile />}/>
        <Route path='student/MyBook' element={<MyBook />}/>
        <Route path='student/BookHistory' element={<BookHistory/>}/>
        <Route path='admin/BookRequests' element={<BookRequests/>}/>
        <Route path='student/Transaction' element={<Transaction/>}/>
        <Route path='admin/Bills' element={<Bills/>}/>
        <Route path='admin/Profiles' element={<Profiles/>}/>
        <Route path='RecentAddedBooks' element={<RecentAddedBooks/>}/>

      </Routes>
      {/* <ButtonsRow /> */}
    </Router>
  );
};

export default App;
