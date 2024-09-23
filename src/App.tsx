import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileDefault from './Profile_default';
import ProfileSaved from './Profile_saved';
import ProfileTagged from './Profile_tagged';
// import ProfileEdit from './Profile_edit';
// import Search from './Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProfileDefault />} />
          <Route path="/saved" element={<ProfileSaved />} />
          <Route path="/tagged" element={<ProfileTagged />} />
          {/* <Route path="/edit" element={<ProfileEdit />} />
          <Route path="/search" element={<Search />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;