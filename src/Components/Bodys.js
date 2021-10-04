import React from 'react'

import quote from '../images/quote.png'
import { HomeWrapper } from "./style";

import Maskk from '../images/Maskk.png'
import Sliders from './Sliders'
import hand from '../images/hand.png'

import Groupall from '../images/Groupall.png'
import Groups from '../images/Groups.png'
import Groupp from '../images/Groupp.png'
import surface from '../images/surface.png'
import Groupas from '../images/Groupas.png'


import bmk from '../images/bmk.png'
import collage from '../images/collage.png'
import Whats from '../images/Whats.png'
import now from '../images/now.png'
import nows from '../images/nows.png'
import pickt from '../images/pickt.png'
import face from '../images/face.png'

 
function Bodys() {
    return (
        <div className="section__body__thireds">
       <div className="section__body__thireds__continer">
         <br />
           <div className="quote">
           < img src={quote}  alt="" /> 

           </div>
           <br />

           <div className="all__p__h"> 
 <h2 className="h__2">Trusted By Thousands Of
</h2>
<h2 className="h__2"> Companies & Individuals</h2>
</div>
 
<hr className="hr"/>
     <HomeWrapper>
    <Sliders />
    </HomeWrapper >
<input className="feedback"  value="Give Us Feedback"/>
  <br />
     </div>
     <div className="box__shadow">
     <div className="box__shadow__container">
     <div className="box__shadow__part1">
<img src={hand}  alt=""/>
 <div className="text__part">
<p>Trusted By Thousands Of
</p>
<p>Companies & Individuals</p>
 </div>
   </div> <div className="box__shadow__paert2">
       <br />
   <img className="Groups" src={Groups}  alt=""/>
    <div className="text__parts">
   <img src={Groupp}  alt=""/>

   <img src={surface}  alt=""/>
   <img src={Groupas}  alt=""/>
 </div>
 
   </div> 
 
   </div>
 </div>
 <br />

 <div className="end__section">
 <div className="end__section__continer">

 <img src={Groupall}  alt=""/>
<div className="absu">
<p>Join our newsletter To
</p>
<p>receive new technical news</p>
<br />
<input className="feedback__enf__section"  placeholder="Enter your email to join"/>

</div>
 
     </div>

     
 </div>
 
 <div className="section__end__parts">
 
    <div className="section__end__parts__right">

    <img src={bmk}  alt=""/>
    <img src={collage}  alt=""/>
    <img src={Whats}  alt=""/>
    <img src={now}  alt=""/>
    <img src={nows}  alt=""/>
    <img className="pickt" src={pickt}  alt=""/>

 
</div>

 
<div className="section__end__parts__left">
<div className="body___home__two">
      <h1 className="h1">  Our

</h1>
<h1 className="h1">    Clients</h1>
<div className="prg__end__section "> 
<p className=" ">Lorem ipsum dolor sit amet, consectetuer 
adipiscing  


 elit, sed diam nonummy nibh euismod tincidunt ut 

    laoreet dolore magna aliquam erat volutpat.  
    </p>
     </div>
 
    </div>    

    
      </div> 
    
 

 
     </div>
     <img className="face" src={face}  alt=""/>

        </div>
    )
}

export default Bodys
