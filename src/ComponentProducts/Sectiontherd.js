import React from 'react'
import '../css/Products.css';
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
{/* to insert card use grid */}
   <div className="grid__all">
<div className="grid">

</div>
   </div>
      </div>
         </div>
    )
}

export default Sectiontherd
