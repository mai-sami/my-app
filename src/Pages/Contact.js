import React from 'react'
import '../css/pages.css';
import contact from '../images/contact.png'

 
 
function Contact() {
    return (
        <div className="contact">
            <div className="form">
              <div className="form__right">
           <img src={contact} alt="" />
           <br />
           <div className="all__inputsss">

           <textarea className="inputs">Tell us your problem</textarea>
              </div>
              </div>
              <div className="fom__lefts__contact">
          <h1 className="h__forms">     Contact us</h1>
          <p className="form__P__contat">   
          You can contact us if you need us through this message
          
          
          </p>
       <br/>
       <div className="all__inputss">
       <input className="inputt" placeholder="FULL NAME" />
       <input className="inputt" placeholder="Mobile number  " />
       <input className="inputt" placeholder="  Email" />
  
       </div>
 

 
      
       </div> 
       <input value="Send"   className="ss" />

             </div>
             <input value="Send"   className="Send__send" />

        </div>
    )
}

export default Contact
