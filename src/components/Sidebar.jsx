import React from 'react'
import './Sidebar.css'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EditDocumentIcon from '@mui/icons-material/EditDocument';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-first'><div><ManageAccountsIcon/></div><div><h4>Services</h4></div>   </div>
    <div className='sidebar-first'><div><AttachMoneyIcon/></div><div><h4>Money</h4></div></div>
    <div className='sidebar-first'><div><AccountBalanceWalletIcon/></div><div><h4>Balance</h4></div></div>
      <div className='sidebar-first'><div><EditDocumentIcon/></div><div><h4>Documents</h4></div></div>
    </div>
  )
}

export default Sidebar