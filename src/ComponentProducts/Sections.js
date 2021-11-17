import React from 'react'
import expertos from '../images/expertos.png'
import picktlogo from '../images/picktlogo.png'
import first from '../images/first.png'
import G from '../images/G.png'
import last from '../images/last.png'
import firstrow from '../images/firstrow.png'
import secandrow from '../images/secandrow.png'
import '../css/Chats.css'
import ex from '../images/ex.png'
import SendIcon from '@mui/icons-material/Send';
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import Dialog from '@mui/material/Dialog';
 import Chats from '../Pages/Chats'
 import CancelIcon from '@mui/icons-material/Cancel';
var parts = [

  { id: 2,status:true,   image: ex, massge: "How we can help you? " },
  { id: 3, status:false,  image: ex, massge: "Ok iondhcic hd98vihiofv ? " },
  { id: 4, status:true,  image: ex, massge: "How we? sdcdxc" },
  { id: 4, status:true,  image: ex, massge: "How we? sdcdxc" },

  { id: 5, status:false,  image: ex, massge: "How we? " },

  {
    id:6, status:true,  image: ex,
    massge: "What can you do? "
  },




]
function Sections() {
   const [t, i18n] = useTranslation();

  
 
  const [opened, setOpened] =React.useState(false);
  const Taggole=()=>{
      setOpened(true)
  }
  const Taggoles=()=>{
    setOpened(false)
}
  return (
    <div className="sections">
      <div className="section__containrt">
        <div className="im__ge">
          <img src={expertos} />
        </div>

        <div className="product_flex">
          <img className="last" src={last} />
          <img className="x" src={picktlogo} />
          <img className="G" src={G} />
          <img className="x" src={first} />

        </div>



      </div>
      <div className="secand__in">
        <h1 className="h___secand">    {t("How")} </h1>
        <div className="all__iteam__sections" onClick={Taggole}>

          <img className="imgs" src={firstrow} />
          <img className="imgss" src={secandrow} />
        </div>
      </div>



      <Dialog open={opened} onClose={Taggoles}>
      <CancelIcon  className="cancel__chatBot"  onClick={Taggoles} />

 <Chats />
     
      </Dialog>  

 
    </div>

  )
}

export default Sections
