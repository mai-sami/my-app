import React from 'react'
import about from '../images/about.png'
import { useTranslation } from "react-i18next";
import "../translations/i18n";
function AboutUs() {
    const [t, i18n] = useTranslation();

    return (
        <div>
             <div className="contact">
        <div className="form">
          <div className="form__rights__about">
          <div className="TermsCondition">
             <h1 className="h__form__about"> {t("About")}</h1>
             <p className="about__p">  
             {t("Lorem")}
                 </p>
          
        
        <p className="about__p">  
        {t("Lorem")}

                 </p>
              
        <p className="about__p">  
        {t("Lorem")}


                 </p> 
          </div>
          </div>
           <div className="fom__lefts__about">
           
       <div className="im__age">
       <img className="about" src={about} alt="" />

       </div>

      
       </div> 
          
             </div> 
                 </div>  
        </div>
    )
}

export default AboutUs
