import React, { Component } from "react";
import Slider from "react-slick";
  import man from '../images/man.png';
function Sliders() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>

          <div className="cardsa__all">
              
                    <div className="notes">
                        <p>dvdfopjgvopdff</p>
                        <p>dvdfopjgvopdff</p>
                        <p>dvdfopjgvopdff</p>
                        <div className="reating">
                        {Array(5)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}    
                </div>        
                       </div>
                    <div className="cardsa">
                
               <div className="circles">
            <img src={man} alt="" />  
            </div>
            <div className="circle__all">

                 <p>flkndvihodgfv</p>             
            <p>flkndvihodgfv</p>             
            </div> 
            </div>
                    </div>

                  
                    <div className="cardsa__all">
              
              <div className="notes">
                  <p>dvdfopjgvopdff</p>
                  <p>dvdfopjgvopdff</p>
                  <p>dvdfopjgvopdff</p>
                  <div className="reating">
                  {Array(5)
        .fill()
        .map((_, i) => (
          <p>🌟</p>
        ))}    
          </div>        
                 </div>
              <div className="cardsa">
          
         <div className="circles">
      <img src={man} alt="" />  
      </div>
      <div className="circle__all">

           <p>flkndvihodgfv</p>             
      <p>flkndvihodgfv</p>             
      </div> 
      </div>
              </div>

            
              <div className="cardsa__all">
              
              <div className="notes">
                  <p>dvdfopjgvopdff</p>
                  <p>dvdfopjgvopdff</p>
                  <p>dvdfopjgvopdff</p>
                  <div className="reating">
                  {Array(5)
        .fill()
        .map((_, i) => (
          <p>🌟</p>
        ))}    
          </div>        
                 </div>
              <div className="cardsa">
          
         <div className="circles">
      <img src={man} alt="" />  
      </div>
      <div className="circle__all">

           <p>flkndvihodgfv</p>             
      <p>flkndvihodgfv</p>             
      </div> 
      </div>
              </div>

            
              <div className="cardsa__all">
              
              <div className="notes">
                  <p>dvdfopjgvopdff</p>
                  <p>dvdfopjgvopdff</p>
                  <p>dvdfopjgvopdff</p>
                  <div className="reating">
                  {Array(5)
        .fill()
        .map((_, i) => (
          <p>🌟</p>
        ))}    
          </div>        
                 </div>
              <div className="cardsa">
          
         <div className="circles">
      <img src={man} alt="" />  
      </div>
      <div className="circle__all">

           <p>flkndvihodgfv</p>             
      <p>flkndvihodgfv</p>             
      </div> 
      </div>
              </div>

            
              <div className="cardsa__all">
              
              <div className="notes">
                  <p>dvdfopjgvopdff</p>
                  <p>dvdfopjgvopdff</p>
                  <p>dvdfopjgvopdff</p>
                  <div className="reating">
                  {Array(5)
        .fill()
        .map((_, i) => (
          <p>🌟</p>
        ))}    
          </div>        
                 </div>
              <div className="cardsa">
          
         <div className="circles">
      <img src={man} alt="" />  
      </div>
      <div className="circle__all">

           <p>flkndvihodgfv</p>             
      <p>flkndvihodgfv</p>             
      </div> 
      </div>
              </div>

            
              <div className="cardsa__all">
              
              <div className="notes">
                  <p>dvdfopjgvopdff</p>
                  <p>dvdfopjgvopdff</p>
                  <p>dvdfopjgvopdff</p>
                  <div className="reating">
                  {Array(5)
        .fill()
        .map((_, i) => (
          <p>🌟</p>
        ))}    
          </div>        
                 </div>
              <div className="cardsa">
          
         <div className="circles">
      <img src={man} alt="" />  
      </div>
      <div className="circle__all">

           <p>flkndvihodgfv</p>             
      <p>flkndvihodgfv</p>             
      </div> 
      </div>
              </div>

            
              
                
                  
                
        </Slider>
      );
    }
export default Sliders
