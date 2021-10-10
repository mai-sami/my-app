 import React,{useState} from 'react'
import body from '../css/body.css'
import AppleIcon from '@mui/icons-material/Apple';
import googlePlay from '../images/googlePlay.png'
import Mask from '../images/Mask.png'
import desgin from '../images/desgin.png'

 
function Body() {
        const [language, setLanguage] = useState('EN');

    return (
        <div className="body"   >
            <div className="body__one__all">

            <div className="body__secand">
                        <div className="circel__body">
                         </div>
                        <img className="Mask" src={Mask} />
                     
                  <div className="desgin__div"> 
                        <img className="desgin" src={desgin} />
                        </div>
 
 
                    </div>
                    <div className="body__one"> 
                    <h1>Personal
</h1>
<h1>Tech</h1>
<h1>Assistance</h1>

<div className="App__store">


<div className="box__Store">

<img src={googlePlay}   className="icons" />
<div className="icon__text">
    <p className="available"> GIT IT ON    </p>
    <p className="text__app">  Google Play</p>
</div>

</div>
                        <div className="box__Store">
                            <AppleIcon style={{ fontSize: 30}} className="icon" />
                            <div className="icon__text">
                                <div className="available">Available on the</div>
                                <div className="text__app">App Store</div>
                             </div>
             
                        </div>
          
                       
              
                    </div>
                   
                    </div>

                
            </div>
          
                   
        </div>
    )
}

export default Body
