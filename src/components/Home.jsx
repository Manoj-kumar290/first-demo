import React from 'react'
import './Home.css'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';


const Home = () => {
  return (
    <div className='home'>
    <div className='title'><h1>The, trusted bank </h1><div style={{color:"orange"}}><h1>Get Any</h1></div><h1>services like, loan finanace etc</h1></div>
    <div className='home-second'>
<img className='img' src='https://i.pinimg.com/736x/df/e9/5d/dfe95d76bced9c8667a7eebf10bb51c1.jpg' alt='pic'/>
<div className='container2'>
<div className='container'>
 <div className='input'>
   <input type='text' placeholder='  Enter Name or gmail' className='input1'/>
    <input type='text' placeholder='  Enter Password' className='input1'/>
    <button className='btn2'>sign in </button>
 </div>
</div>
<button className='btn'>sign up</button>
</div>
    </div>
    <div className='card'>
<div style={{display:"flex"}}><div className='card-first2'><VolumeUpIcon/></div> <div style={{marginLeft:"20px"}}><h2>Marketing</h2></div></div>
<p className='para-card'>The golden hues of the setting sun kissed the rooftops of Jaipur, painting a serene evening that whispered promises of calm and hope.</p>
</div>
    </div>
  )
}

export default Home