import React from 'react';
import { Navbar } from './Navbar';
import './Software.css';
import ReactPlayer from "react-player";

export const Video = () => {
  return (
    <>
      <Navbar />
      
      <div style={{display: 'flex', padding: '100px 100px 10px 100px'}}>
        <div style={{width: '40%', padding: '0px 20px'}}>
          <h1 style={{color: 'rgb(238, 169, 141)'}}>FLORESENCE</h1>
          <p className='textBody'>A game made in Unity using C# and some original assets</p>
        </div>
        <div style={{width: '60%'}}>
          <ReactPlayer url="https://www.youtube.com/watch?v=L_S-pZcmzA8"  width="100%"  />
        </div>
      </div>
            
      <div style={{display: 'flex', padding: '100px 100px 10px 100px'}}>
        <div style={{width: '40%', padding: '0px 20px'}}>
          <h1 style={{color: 'rgb(238, 169, 141)'}}>MELT</h1>
          <p className='textBody'>Animation using clay</p>
        </div>
        <div style={{width: '60%'}}>
        <ReactPlayer url="https://res.cloudinary.com/dnwbll6u0/video/upload/v1742763088/Anna_Izzy_Melt_pjddlp.mp4" muted loop playing width="100%" />
        </div>
      </div>
      
      <div style={{display: 'flex', padding: '100px 100px 10px 100px'}}>
        <div style={{width: '40%', padding: '0px 20px'}}>
          <h1 style={{color: 'rgb(238, 169, 141)'}}>GRILLS MODELLING</h1>
          <p className='textBody'>Modelling a grill for a VR project</p>
        </div>
        <div style={{width: '60%'}}>
          <ReactPlayer url="https://res.cloudinary.com/dnwbll6u0/video/upload/v1742763088/My_Movie_1_sxrru8.mp4" muted loop playing width="100%"  />
        </div>
      </div>
      
      <div style={{display: 'flex', padding: '100px 100px 10px 100px'}}>
        <div style={{width: '40%', padding: '0px 20px'}}>
          <h1 style={{color: 'rgb(238, 169, 141)'}}>THE LUNA HOTEL</h1>
          <p className='textBody'>Drawn and animated in Photoshop</p>
        </div>
        <div style={{width: '60%'}}>
          <ReactPlayer url="https://res.cloudinary.com/dnwbll6u0/video/upload/v1742763088/thelunahotel_stqms7.mp4" muted loop playing width="100%"  />
        </div>
      </div>
      
      <div style={{display: 'flex', padding: '100px 100px 10px 100px'}}>
        <div style={{width: '40%', padding: '0px 20px'}}>
          <h1 style={{color: 'rgb(238, 169, 141)'}}>DINO RESCUE</h1>
          <p className='textBody'>A game built using the p5.js library and original assets designed in Photoshop</p>
        </div>
        <div style={{width: '60%'}}>
        <ReactPlayer url="https://res.cloudinary.com/dnwbll6u0/video/upload/v1742763088/dinorescuegame_upvszp.mp4" muted loop playing width="100%"  />
        </div>
      </div>
      
      <div style={{display: 'flex', padding: '100px 100px 10px 100px'}}>
        <div style={{width: '40%', padding: '0px 20px'}}>
          <h1 style={{color: 'rgb(238, 169, 141)'}}>SPACE X LANDER</h1>
          <p className='textBody'>A game built using the p5.js library and original assets designed in Photoshop</p>
        </div>
        <div style={{width: '60%'}}>
        <ReactPlayer url="https://res.cloudinary.com/dnwbll6u0/video/upload/v1742763088/space_x_lander_video_play_through_s9l9mz.mp4" muted loop playing width="100%"  />
        </div>
      </div>

      
      <div style={{display: 'flex', padding: '100px 100px 10px 100px'}}>
        <div style={{width: '40%', padding: '0px 20px'}}>
          <h1 style={{color: 'rgb(238, 169, 141)'}}>BRAND PROMOTION</h1>
          <p className='textBody'>Graphics created in After Effects for two clothing brands</p>
        </div>
        <div style={{width: '60%', display: 'flex', gap: '20px'}}>
        <ReactPlayer url="https://res.cloudinary.com/dnwbll6u0/video/upload/v1742763088/Comp_1_2_fgvfr6.mp4" muted loop playing  width="100%" />
        <ReactPlayer url="https://res.cloudinary.com/dnwbll6u0/video/upload/v1742763088/GREMVID_xbx8ka.mp4" muted loop playing width="100%"   />
        </div>
      </div>
      
      {/* <div className='backToTop'>
        <a href="/software" className='toTopText'>Back to top</a>
      </div> */}
    </>
  )
}