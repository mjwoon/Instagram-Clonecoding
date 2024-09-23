import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileDefault from './Profile_default';
import ProfileSaved from './Profile_saved';
import ProfileTagged from './Profile_tagged';
import ProfileEdit from './Profile_edit';
import UserProfile from './UserProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProfileDefault />} />
          <Route path="/saved" element={<ProfileSaved />} />
          <Route path="/tagged" element={<ProfileTagged />} />
          <Route path="/edit" element={<ProfileEdit />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
