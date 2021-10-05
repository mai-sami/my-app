import React from 'react'
import contact from '../images/contact.png'
import '../css/pages.css';

import register from '../images/register.png'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
function Register() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const [taggle,setTaggle] =React.useState(false)

    const taggles=()=>{
        taggle? setTaggle(false): setTaggle(true)
      }
    return (
        <div className="contact">
        <div className="form">
          <div className="form__rights">
      <div className="form__register">
          <div className="tab"> 
       <Box sx={{ borderBottom: 0, borderColor: 'divider' , alignItems:'center', textAlign:'center'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="  Sign up" {...a11yProps(0)} />
          <div className="div__hr"></div>
          <Tab onClick={taggles} label="  Sign in" {...a11yProps(1)} />
         </Tabs>
      </Box>
      </div>
       <TabPanel value={value} index={0}>
<div className="flex__tab">

    <div className="bloc__tab">
<p>FIRST NAME</p>
<input className="first__input" />
    </div>

    <div className="bloc__tab">
<p>LAST NAME</p>
<input  className="first__input" />
    </div>
    </div>

    <div className="flex__tabs">
<div className="pp">
    <p>EMAIL ADDRES</p>
    <input required className="first__inputs" />

        </div>
        <div className="pp">

    <p>PASSWORD</p>
    <input type="password" required className="first__inputs" />

        </div>
        <div className="pp">

    <p>CONFIRM PASSWORD</p>
    <input required  className="first__inputs" />

        </div>
    </div>
    <input className="Account" value="Create New Account" />
          </TabPanel>
      <TabPanel value={value} index={2}>
    <div className="butt_pn">

      <div className="flex__tabs">
<div className="pp">
    <p>EMAIL ADDRES</p>
    <input required className="first__inputs" />

        </div>
        <div className="pp">

    <p>PASSWORD</p>
    <input type="password" required className="first__inputs" />

        </div>
        <div className="li__right">
       <li><a className="a__A__a" href="/forget">Forget your password </a></li>
       </div>
    </div>

    <input className="Accounts" value="  Sign In" />
    </div>
      </TabPanel>
    
    
            </div>
          </div>
          {taggle?
          <div className="fom__lefts">
          <h1 className="h__forms">   Welcome Back!</h1>
          <p className="form__Ps">   
          We are glad to have you with us You can log in
to take advantage of our services 
          
          
          </p>
       <br/>
       <div className="im__age">
       <img className="register" src={register} alt="" />

       </div>

      
       </div> 
          :  
          <div className="fom__lefts">
          <h1 className="h__forms">  Welcome !</h1>
          <p className="form__Ps">First time, you should login or sign up</p>
       <br/>
       <div className="im__age">
       <img className="register" src={register} alt="" />

       </div>

      
       </div>  
          
 }
         </div>
         
    </div>
    )
}

export default Register
