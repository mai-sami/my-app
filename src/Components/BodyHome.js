import React from 'react'
import social from '../images/social.png'
 
 import phone from '../images/phone.png'
import Maskk from '../images/Maskk.png'
import Group from '../images/Group.png'
import MaskG from '../images/MaskG.png'

import Bodys from'./Bodys';
  
  
 
function BodyHome() {
    return (
        <div className="body___home">
            <div className="body___home__body">
                <div className="all"> 
<div className="body___home__one">
<img src={social} alt="" />
    </div>           
    
    <div className="body___home__two">
      <h1 className="h1">How can
</h1>
<h1 className="h1">we help you?</h1>
<div className="p__all"> 
<p className="p__h">Lorem ipsum dolor sit amet, consectetuer adipiscing   
</p>
<p className="p__h">elit, sed diam nonummy nibh euismod tincidunt ut
 </p>
     <p className="p__h"> laoreet dolore magna aliquam erat volutpat.   </p> 
     </div>
 
    </div>    
    </div>
    <div  className="body___home__therd">
    <br />     
    <p className="p__P">Our services</p>
    <br />
<div className="cards">
    <div className="card">
    <div className="card__p">

<p>Computer</p>
<p>Repair</p>
</div>

<div className="shape3">
<img src={Maskk} alt="" />
 </div>
 

</div>
<div className="card">

<div className="card__p">

<p>Mobile
</p>
<p>Repair</p>
</div>
<div className="shape3">
<img src={phone} alt="" />
 </div>
 </div>
 
<div className="card">
<div className="card__p">

<p>Tablet</p>
<p>Repair</p>
</div>

<div className="shape3">
<img src={Maskk} alt="" />
 </div>
</div>
<div className="card">
<div className="card__p">

<p>Online
 </p>
<p>Support</p>
</div>

<div className="shape3">
<img src={MaskG} alt="" />
 </div>
</div>
 
 
 
</div>
        
        
        </div>  
         <div className="section">
 <div className="section__right">
<img src={Group} alt="" /> </div>
 <div className="section__leaft">
<p className="p__spacing">Our services are guaranteed 100%</p>
 
 <p  className="p__spacings">You can get a refund If the service is not provided
</p>
<p  className="p__spacings">as required .. </p>
 
 
 </div>
 </div>
      </div>
      <Bodys />
        </div>
    )
}

export default BodyHome
