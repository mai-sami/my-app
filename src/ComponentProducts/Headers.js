import React from 'react'
import header from '../images/header.png'
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import '../css/Products.css';

function Headers() {
    return (
        <div className="header">
        <div className="header__containrt">
        <div className="im__ge">
     <img  src={header}/>
     <nav>
     <select className="select"> 
     <option  className="active" selected disabled>Products</option>

  
    
     </select>
     </nav>
  </div>

      
     <div className="items">
     <div className="items__image">
     </div>
         <div className="products__P">
<p className="p1">Mohammed3mera</p>
<p className="p2">2000 Point</p>

     </div>
 </div>
        </div>
</div>
    )
}

export default Headers
