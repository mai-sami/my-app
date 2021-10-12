import React from 'react'
 import '../css/pages.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import massg from '../images/massg.png'
import register from '../images/register.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useTranslation } from "react-i18next";
import "../translations/i18n";
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
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const [taggle,setTaggle] =React.useState(false)

    const taggles=()=>{
        taggle? setTaggle(false): setTaggle(true)
      }

      const [t, i18n] = useTranslation();

    return (
        <div className="contact">
        <div className="form">
          <div className="form__rights">
      <div className="form__register">
          <div className="tab"> 
       <Box sx={{ borderBottom: 0, borderColor: 'divider' , alignItems:'center', textAlign:'center'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={t("Sign")} {...a11yProps(0)} />
          <div className="div__hr"></div>
          <Tab onClick={taggles} label={t("Signs")} {...a11yProps(1)} />
         </Tabs>
      </Box>
      </div>
       <TabPanel value={value} index={0}>
<div className="flex__tab">

    <div className="bloc__tab">
<p>   {t("FIRST")}</p>
<input className="first__input" />
    </div>

    <div className="bloc__tab">
<p>   {t("LAST")}</p>
<input  className="first__input" />
    </div>
    </div>

    <div className="flex__tabs">
<div className="pp">
    <p>   {t("EMAIL")}</p>
    <input required className="first__inputs" />

        </div>
        <div className="pp">

    <p> {t("PASSWORD")}</p>
    <input type="password" required className="first__inputs" />

        </div>
        <div className="pp">

    <p>   {t("CONFIRM")}</p>
    <input required  className="first__inputs" />

        </div>
    </div>
    <input className="Account" onClick={handleClickOpen} type="submit"  value={t("Create")}   />
          </TabPanel>
      <TabPanel value={value} index={2}>
    <div className="butt_pn">

      <div className="flex__tabs">
<div className="pp">
    <p>   {t("EMAIL")}</p>
    <input required className="first__inputs" />

        </div>
        <div className="pp">

    <p> {t("PASSWORD")}</p>
    <input type="password" required className="first__inputs" />

        </div>
        <div className="li__right">
       <li><a className="a__A__a" href="/forget">  {t("Forget")}  </a></li>
       </div>
    </div>

    <input className="Accounts" type="submit"  value=  {t("Signs")}  />
    </div>
      </TabPanel>
    
    
            </div>
          </div>
          {taggle?
          <div className="fom__lefts">
          <h1 className="h__forms">  {t("Welcome")}</h1>
          <p className="form__Ps">   
          {t("text")}
          
          
          </p>
       <br/>
       <div className="im__age">
       <img className="register" src={register} alt="" />

       </div>

      
       </div> 
          :  
          <div className="fom__lefts">
          <h1 className="h__forms">  {t("Welcomes")}</h1>
          <p className="form__Ps">          {t("text")}
</p>
       <br/>
       <div className="im__age">
       <img className="register" src={register} alt="" />

       </div>

      
       </div>  
          
 }
         </div>
         <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
  
         <div className="dilog">
 
        <img className="massg" src={massg} alt="" />
       
        <div className="di__log">
          <p>
          Please check on
your email
          </p>
          </div>

          <div className="header__search">
 
 <input className="chek" value="let's go" />
 <ArrowRightAltIcon  style={{ fontSize: 30 }} className="arrow" />
 </div>
           </div>
        
   
        <DialogActions>

        <div className="Close__all">
 
                         <input className="Close" onClick={handleClose} value="Close" />
                         </div>
         
         </DialogActions>
      </Dialog>
    </div>
    )
}

export default Register
