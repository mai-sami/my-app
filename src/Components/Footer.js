import React from 'react'
import Groupsocail from '../images/Groupsocail.png'

import expertoss from '../images/expertoss.png'
import AppleIcon from '@mui/icons-material/Apple';
import googlePlay from '../images/googlePlay.png'
function Footer() {
    return (
        <div className="footer">
      
 
        <div className="footer__contaner">
           <div className="part">
<img src={expertoss} alt="" />
<br />

<div className="p__footer">
<p>Technical platform that helps you 
build your technical project

</p>
<br />
<p> 
through a specialized system for 
emerging applications, providing
 </p>
</div>

           </div>
           <div className="grid__all"> 
<div className="grid">

    <h2 class="ct_footer ">  HOME</h2>
       <ul className="ul">
      <li>
        <a className="a__a" href="/about">About Us</a>
      </li>
      <li>
        <a className="a__a" href="">Investors</a>
      </li>
      <li>
        <a className="a__a" href="/terms">Terms of Service  </a>
      </li>
      <li>
        <a className="a__a" href="/privacy">Privacy Policy</a>
      </li>
      <div className="div__a">
      <li>
        <a className="a__a" href="">  Blog</a>
      </li> <li>
        <a className="a__a" href="">  Jobs</a>
      </li> <li>
        <a className="a__a" href="">  FAQ</a>
      </li>
      </div>
    </ul>
    </div>
    <div className="gridfooters">


    <h2 class="ct_footer">  Services</h2>
    <ul className="ul">
      <li>
        <a className="a__a" href="/product">Business</a>
      </li>
      <li>
        <a className="a__a" href="">Personal</a>
      </li>
      <li>
        <a className="a__a" href="">Providers</a>
      </li>
      
    </ul>
    </div>

    <div className="gridfooter">
<h2 class="ct_footer">  Contact Us</h2>
<div className="socail">
 
  <img src={Groupsocail} alt="" />
 
<div className="App__stores">


<div className="boxx__Store">

<img src={googlePlay}   className="icons" />
<div className="icon__text">
    <p className="available"> GIT IT ON    </p>
    <p className="text__app">  Google Play</p>
</div>

</div>
                        <div className="boxx__Store">
                            <AppleIcon style={{ fontSize: 30}} className="icon" />
                            <div className="icon__text">
                                <div className="available">Available on the</div>
                                <div className="text__app">App Store</div>
                             </div>
             
                        </div>
                        </div>
                       
</div>
</div>


</div>
 
</div>
<br />
<br />

<hr className="hr__h" />
<div class="bottom">
 <p>All Copyright By Experto © 2020   </p>
</div>
        </div>
    )
}

export default Footer

