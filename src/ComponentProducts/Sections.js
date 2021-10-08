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

import Dialog from '@mui/material/Dialog';

import { Link } from "react-router-dom";

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
  const [open, setOpen] = React.useState(false);
 
  const handleClickOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="sections">
      <div className="section__containrt">
        <div className="im__ge">
          <img src={expertos} />
        </div>

        <div className="product_flex">
          <img className="last" src={last} />
          <img src={picktlogo} />
          <img className="G" src={G} />
          <img src={first} />

        </div>



      </div>
      <div className="secand__in">
        <h1 className="h___secand">How can I help you?</h1>
        <div className="all__iteam__sections" onClick={handleClickOpen}>

          <img className="imgs" src={firstrow} />
          <img className="imgss" src={secandrow} />
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <div className="chat">

          <div className="contant">
            <div className="chats">
              <div className="chatss">
              <div className="ll">

                {parts.map((part) => (
 <div>
   
  {part.status ?

                     <div className="contant__right">

                      <div className="div__mass">

                        <p>{part.massge}</p>
 
                      </div>
                   

                    </div>
                    :
                    <div className="contant__rleft">
                      <div className="ci__bb">
                        <img className="chat__msg" src={part.image} />
                      </div>
                      <div className="div__mass__left">

                        <p>{part.massge}</p>

                      </div>


                    </div>
                                      

            
                }
                 </div>
                
                ))}
                   </div>
                <div className="footer__chats">
                  <div className="ci__bb">
                    <img className="chat__msg" src={ex} />
                  </div>
                  <div className="text__text">
                    <p className="large">Enter the number of logo you want</p>
                    <div className="div__send">
                      <SendIcon className="SendIcon" style={{ fontSize: 20 }} />

                      <input className="send__input" />
                    </div>
                    <p className="small">Press enter to send</p>
                    <small className="small">12:4</small>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </Dialog>
    </div>

  )
}

export default Sections
