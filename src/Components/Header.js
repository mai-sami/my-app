import React from 'react'
import '../App.css';
import expertos from '../images/expertos.png'
import PersonIcon from '@mui/icons-material/Person';
function Header() {
    const current =window.location.href;
    const muneItem=document.querySelectorAll('a');
    const menuLengh = muneItem.length;
    for(let i=0; i<menuLengh; i++){
if(muneItem[i].href===current){
    muneItem[i].className= "active"
}
    }
    return (
        <div className="header">
                    <div className="header__containrt">
                    <div className="im__ge">
                 <img  src={ expertos}/>
              </div>

                    <nav>
                 
                 <ul >
                     <li><a    className="active" href="/"> Personal</a></li>
                     <li><a     href="/ "> Business  </a></li>
                     <li><a   href="/"> Join as a pro  </a></li>
                                       
                 </ul>
                 </nav>
                 <div className="com__ul">
                 <button className="order__noe">Order Now</button>
 <div className="circle">
<PersonIcon className="personal"  style={{ fontSize: 14 }}/>
  </div>
         
             </div>

             
                    </div>
        </div>
    )
}

export default Header