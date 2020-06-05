import React, { memo } from 'react';
import './App.css';
import AdminUser from './components/AdminUser/AdminComponent';

export default memo(function App(props) {
  return (
    <div>
      <AdminUser />
    </div>
  )
})


