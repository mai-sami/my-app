import React from 'react'
import '../css/Products.css';
import im22 from '../images/im22.png'
import im5 from '../images/im5.png'
import im3 from '../images/im3.png'
import im1 from '../images/im1.png'
import im2 from '../images/im2.png'
import im4 from '../images/im4.png'
import fan from '../images/fan.png'

function Sectiontherd() {
    return (
        <div> 
        <div className="sectiontherd">
                    <div className="body__one__section__all">
                    <div className="body__one__section">
<p className="same">We are thinking outside
</p>           

<p className="same">the box to build
</p>
<p className="diifrent">your Project...</p>
      </div>
            <div className="body__secand">
<img className="fan" src={fan} alt="" />
            </div>
           
         </div>
         </div>
         <div className="sectionfoure">
<h3>Portfolio</h3>
<div className="size">
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
     sed diam nonummy nibh euismod tincidunt ut laoreet
     dolore magna aliquam erat volutpat.
     </p> 
</div>



<div  className="body___home__therd">
 <br />
<div className="grid__all">
    <div className="grid">
    
    <img src={im22} alt="" />
 </div>
 

 <div className="grid">
    
    <img src={im2} alt="" />
 </div> <div className="grid">
    
    <img src={im2} alt="" />
 </div> <div className="grid">
    
    <img src={im5} alt="" />
 </div> <div className="grid">
    
    <img src={im4} alt="" />
 </div> <div className="grid">
    
    <img src={im3} alt="" />
 </div>
 
 
 
</div>
        
        
        </div>  











{/* to insert card use grid */}
   {/* <div className="grid__all">
<div className="grid">
<img src={im1} alt="" />
<img src={im22} alt="" />

<img src={im5} alt="" />

</div>
   </div> */}
      </div>
         </div>
    )
}

export default Sectiontherd
