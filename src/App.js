import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Transfer from './components/Transfer';
import Adduser from './components/Adduser';
import './style/app.css';
import LoginPage from './components/loginpage';
import ZipFiles from './components/ZipFiles';
import Group from './components/Group';
import Service from './components/Service';
import NoPage from './components/Nopage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<ZipFiles />} />  
        <Route path="/home/blogs" element={<Adduser />} />
        <Route path="/home/contact" element={<Transfer />} />
        <Route path="/home/group" element={<Group />} />
        <Route path="/home/service" element={<Service />} />
        <Route path="/home/*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}
