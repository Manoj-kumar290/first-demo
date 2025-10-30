
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCallIcon from '@mui/icons-material/AddCall';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AppsIcon from '@mui/icons-material/Apps';
import Home from './components/Home';

function App() {


  return (
    <>
   <div className='app'>
 <div className='first'><div><AccountBalanceIcon/></div> <div><h3>Banking</h3></div></div>
 <div className='second'><div><AddCallIcon/></div><div><AddCircleIcon/></div><div><AppsIcon/></div></div>
   </div>
   <div className='app-second'>
  <Sidebar/>
<Home/>
   </div>
  

   </>
  )
}

export default App
