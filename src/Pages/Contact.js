import React from 'react'
import '../css/pages.css';
import contact from '../images/contact.png'
import { useTranslation } from "react-i18next";
import "../translations/i18n";
 
 
function Contact() {
    const [t, i18n] = useTranslation();

    return (
        <div className="contact">
            <div className="form">
              <div className="form__right">
           <img src={contact} alt="" />
           <br />
           <div className="all__inputsss">

           <textarea className="inputs">Tell us your problem  </textarea>
              </div>
              </div>
              <div className="fom__lefts__contact">
          <h1 className="h__forms">    {t("Contact")}    </h1>
          <p className="form__P__contat">   
          {t("Yo")}             
          
          </p>
       <br/>
       <div className="all__inputss">
       <input className="inputt" placeholder=   {t("FULL")} />
       <input className="inputt" placeholder=   {t("Mobile")}/>
       <input className="inputt" placeholder=   {t("EMAIL")} />
  
       </div>
 

 
      
       </div> 
       <input value="Send"   className="ss" />

             </div>
             <input value= {t("Send")}   className="Send__send" />

        </div>
    )
}

export default Contact
