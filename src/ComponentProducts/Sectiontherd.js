import React from 'react'
import '../css/Products.css';
import im22 from '../images/im22.png'
import slid from '../images/slid.png'
import im3 from '../images/im3.png'
import im1 from '../images/im1.png'
import im2 from '../images/im2.png'
import im4 from '../images/im4.png'
import fan from '../images/fan.png'
import pn from '../images/pn.png'
import { HomeWrapper } from "../Components/style";
import dec from '../images/dec.png'
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
 import lastss from '../images/lastss.png'
import mid from '../images/mid.png'
import image from '../images/image.png'
import maps from '../images/maps.png'
import { useTranslation } from "react-i18next";
import "../translations/i18n";
var card = [{
   image: lastss, name: "Experto Identity ", title: "Lorem ipsum dolr sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "
}, {
   image:mid, name: "Experto Identity ", title: "Lorem ipsum dolr sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "
}, {
   image: lastss , name: "Experto Identity ", title: "Lorem ipsum dolr sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "
}];


var SlideTwo = [ 
{
   image: image, name: "   Mohammed3mera ",small:"@moh2020", title: "Using real content duri ms alike away from the design, and insisting on always using publication-ready content can be a real drag on the design process."
}, 
{image: image, name: "   Mohammed3mera ",small:"@moh2020", title: "Using real content during design   away from the design, and insisting on always using publication-ready content can be a real drag on the design process."
},   {image: image, name: "   Mohammed3mera ",small:"@moh2020", title: "Usi g design can distract desig like away from the design, and insisting on always using publication-ready content can be a real drag on the design process."
},  { image: image, name: "   Mohammed3mera ",small:"@moh2020", title: "Using  stract designers and design nd insisting on always using publication-ready content can be a real drag on the design process."
}, {  image: image, name: "   Mohammed3mera ",small:"@moh2020", title: "Using real content during design can d eams alike away from the design, and insisting on always using publication-ready content can be a real drag on the design process."
},   

];

function Sectiontherd() {

   var settingsSecand= {
      dots: true,
      infinite: true,
      speed: 500,
      arrows:false,
      slidesToShow: 3,
      slidesToScroll: 1
   };
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
   };
     const [t, i18n] = useTranslation();

   return (
      <div className="j">
         <div className="sectiontherd">
            <div className="body__one__section__all">
               <div className="body__one__dec">
                  <p className="same">{t("we")}
                  </p>

                  <p className="same">{t("the")}
                  </p>
                  <p className="diifrent">{t("toyr")}</p>
               </div>
               <div className="body__secand">
                  <img className="fan" src={fan} alt="" />
               </div>

            </div>
         </div>
         <div className="sectionfoure">
            <h3>{t("Portfolio")}</h3>
            <div className="size">
               <p>{t("A")}
               </p>
            </div>


         </div>


         <div className="body___home__therd">
            <br />
            <div className="grid__all">
               <div className="grid__pn">

                  <img src={pn} alt="" />
               </div>


               <div className="grid__pna">

                  <img src={im22} alt="" />
               </div>
               <div className="grid__pns">

                  <img src={im2} alt="" />
               </div>
               <div className="grids">

                  <img src={im1} alt="" />

               </div>
               <div className="grid__pnss">

                  <img src={im4} alt="" />
               </div>
               <div className="grids">

                  <img src={im3} alt="" />
               </div>


            </div>

            <HomeWrapper>
               <div className="slid">

                  <Slider {...settings}>

                     <img src={slid} alt="" />

                     <img src={slid} alt="" />
                     <img src={slid} alt="" />
                     <img src={slid} alt="" />



                  </Slider>
               </div>
            </HomeWrapper >

            <div className="dercoration">
               <div className="decs">

                  <div className="body__as__As">
                     <img className="dec" src={dec} />
                  </div>
                  <div className="body__ones__as__dec">
                     <h1 className="at__last">{t("Our")}

                     </h1>

                     <div className="lor">
                        <p> {t("text")}</p>
                     </div>

                  </div>

               </div> </div>


            <div className="other__sections">
               <div className="card__number">
                  <div className="part__S">
                     <h1>+125</h1>
                     <p>{t("text")}</p>

                  </div>
                  <div className="part__S">
                     <h1>+150</h1>
                     <p>{t("text")}</p>

                  </div> <div className="part__S">
                     <h1>+50</h1>
                     <p>{t("text")}   </p>

                  </div>


               </div>



            </div>
            <div className="card__number__mat">
               {card.map((cards) => (

                  <Card sx={{ maxWidth: 355 }}>

                     <CardMedia
                        component="img"
                        height="244"
                        image={cards.image}
                        alt="Cards"

                     />
                     <div className="footer__card">
                        <p> {cards.name}</p>
                      <span>  {cards.title}</span>

                     </div>


                  </Card>
               ))}

            </div>

            <div className="end__all__sections">

               <h1> {t("our")}   
</h1>
 <h1>  {t("about")} </h1>
 <br />

                <div className="end">
 
                  <Slider {...settingsSecand}>
                  {SlideTwo.map((Slide) => (
<div className="end__card">
                     <img src={Slide.image} alt="" />
<p className="names">{Slide.name}</p>
<p className="smalls">{Slide.small}</p>
<p className="title">{Slide.title}</p>
 
<img className="maps" src={maps} alt="" />
             </div>     
                     ))}


                  </Slider>
                      
               </div>
              </div>
         </div>






      </div>
   )
}

export default Sectiontherd
