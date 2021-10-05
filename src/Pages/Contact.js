import React from 'react'
import '../css/pages.css';
import contact from '../images/contact.png'

import forget from '../images/forget.png'

 
function Contact() {
    return (
        <div className="contact">
            <div className="form">
              <div className="form__right">
           <img src={contact} alt="" />
           
              </div>
              <div className="fom__lefts">
          <h1 className="h__forms">   Welcome Back!</h1>
          <p className="form__Ps">   
          Check your email, to send a message with a
confirmation code
          
          
          </p>
       <br/>
       <div className="im__age">
       <img className="register" src={forget} alt="" />

       </div>

   

      
       </div> 
             </div>
        </div>
    )
}

export default Contact
