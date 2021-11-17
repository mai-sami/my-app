import React from 'react'
import { FormControl,Container,Row,Col,InputGroup,Form } from 'react-bootstrap';
import pay from '../images/pay.png';
import Apple from '../images/Apple.png';
import accountBalance from '../images/accountBalance.png';
import GroupPay from '../images/GroupPay.png';
import { useTranslation } from "react-i18next";
import "../translations/i18n";
 
function Pay() {
  const [t, i18n] = useTranslation();

    return (
        <div className="pay__method">
            <br />

            <Container>
  <Row id="pay__row">
    <Col className="colOne" >
    <h3> {t("TiTlePay")}
        <br />
        
        {t("TiTlePays")}</h3>   
        <br />
         <div className="div__Pay__image">
         <img src={pay}  className="pay__image" alt="pay"/>  
        </div>
        <br />
         <div className="div__Pay__color">
         <img src={Apple}  className="Apple__image" alt="pay"/>  
         <span className="s__PA__N">Pay with Apple Pay</span>
        </div>
        <br />
         <div className="div__Pay__colors">
         <img src={accountBalance}  className="Apple__images" alt="pay"/>  
         <span className="s__PA__N">Experto wallet</span>
        </div>
    </Col>
    <Col >
    <div className="Pay__divsAll">

    <div className="Pay__divs">
    <InputGroup className="mb-3">
 
<Col xs={8} >
  <Form.Control id="input__pay" type="text" />
</Col>
<br />

    </InputGroup>
    <InputGroup>
    <Col xs={5} >
    <Form.Label id="lable__personal">        {t("Holdername")}  </Form.Label>
  <Form.Control id="input__pays" type="text" />

</Col>
<Col xs={1} >
 
</Col>
<Col   xs={3}  >
<Form.Label id="lable__personal">         {t("Expiry")} </Form.Label>

  <Form.Control id="input__pays" type="text" />
</Col>
</InputGroup>
 
         </div>
         </div>

    </Col>
  </Row>
  </Container>
  
  <input type="submit" className="evet" value=   {t("Next")}/>
        </div>
    )
}

export default Pay
