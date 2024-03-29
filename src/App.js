import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Transfer from './components/Transfer';
import Adduser from './components/Adduser';
import './style/app.css';
import LoginPage from './components/loginpage';
import ZipFiles from './components/ZipFiles';
import Group from './components/Group';
import NoPage from './components/Nopage';
import JoinGroup from './components/JoinGroup';
import ReadUser from './components/readUser';
import AddUserJoin from './components/Addjoingroup';
import Host from './components/Host';
import AddGroup from './components/AddGroup';
import AddHost from './components/AddHost';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<ZipFiles />} />  
        <Route path="/home/readuser/" element={<ReadUser />} />
        <Route path="/home/readuser/adduser" element={<Adduser />} />
        <Route path="/home/transfer" element={<Transfer />} />
        <Route path="/home/group" element={<Group />} />
        <Route path="/home/group/addgroup" element={<AddGroup />} />
        <Route path="/home/host" element={<Host />} />
        <Route path="/home/host/addhost" element={<AddHost />} />
        <Route path="/home/joingroup" element={<JoinGroup />} />
        <Route path="/home/joingroup/adduserjoin" element={<AddUserJoin />} />
        <Route path="/home/*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}
