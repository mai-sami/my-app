import React from 'react'
import contact from '../images/contact.png'
import forget from '../images/forget.png'
import { useTranslation } from "react-i18next";
import "../translations/i18n";
function ForgetPassword() {
  const [t, i18n] = useTranslation();

    return (
        <div className="contact">
        <div className="form">
        <div className="form__rights__password">
      <div className="form__password">
          <div className="butt_pn__pass">

<div className="flex__tabs">
<div className="pp">
<p>EMAIL ADDRES</p>
<input required className="first__inputs" />

  </div>
  <div className="pp">

<p>PASSWORD</p>
<input type="password" required className="first__inputs" />
 
  </div>
 
</div>
<input className="Reset" value="Reset Password" />
 
 </div>
</div>
          </div>
          <div className="fom__left">
             <h1 className="h__forms">  Forget password</h1>
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

export default ForgetPassword
