import React, { useEffect,useRef } from "react";
import Navbar from "./Navbar";
// import {NET} from 'vanta'
import NET from 'vanta/src/vanta.net'
import Footer from "./Footer";
const Home = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current, 
      mouseControls: true, 
      touchControls: true, 
      gyroControls: false,
      minHeight: 700.00,
      Width: 100.00,
      top:100.00,
      paddingTop: -100.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xafff00,
      backgroundColor: 0x00000,
      points: 10.00,
      maxDistance: 16.00,
      spacing: 10.00,
      paddingLeft:50.00,
      size:2      
       });

    return () => {
      // Clean up the effect when the component unmounts
      vantaEffect.destroy();
    };
  }, []);

  



  return (
    <>
    
      <Navbar />
      <div className="home-page">
      <div className="child" style={{ paddingTop: "40px", paddingLeft:"30px"}}>
        <h1 >
          <b style={{ textAlign: "left",fontSize:'60px' }}>Welcome to TechChor  </b><br />
          <p>  </p><br />
          <b style={{ textAlign: "left",fontSize:'40px' }}>Empowering Student Innovators!</b>
        </h1>
        <p style={{ fontSize: "22px" , paddingLeft:'0px',paddingTop:'20px',color:'white'}}>
          At TechChor, we believe in the power of innovation, collaboration, and
          knowledge sharing. We are more than just a student community; we are a
          vibrant ecosystem of tech enthusiasts, programmers, designers, and
          innovators coming together to shape the future. Whether you're a
          beginner with a passion for technology or an experienced coder looking
          to expand your horizons, TechChor is the perfect place for you.
        </p>
        
    
    
    </div>
    <div ref={vantaRef} className="child1" >
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
