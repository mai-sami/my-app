import React from 'react'
import expertos from '../images/expertos.png'
import picktlogo from '../images/picktlogo.png'
import first from '../images/first.png'
import G from '../images/G.png'
import last from '../images/last.png'
import firstrow from '../images/firstrow.png'
import secandrow from '../images/secandrow.png'

 
 import { Link } from "react-router-dom";
function Sections() {
    return (
        <div className="sections">
                     <div className="section__containrt">
                    <div className="im__ge">
                 <img  src={ expertos}/>
              </div>

                   <div className="product_flex">
                   <img className="last" src={ last}/>
                   <img  src={ picktlogo}/>
                   <img className="G"  src={ G}/>
                   <img  src={ first}/>

                   </div>
                 
 
             
                    </div>
                    <div className="secand__in">
                    <h1 className="h___secand">How can I help you?</h1>
<div className="all__iteam__sections">
<img className="imgs" src={ firstrow}/>
  <img className="imgss" src={ secandrow}/>
</div>
                        </div>
         </div>
                       
    )
}

export default Sections
