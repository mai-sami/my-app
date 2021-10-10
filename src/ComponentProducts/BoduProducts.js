import React from 'react'
import MaskProducts from '../images/MaskProducts.png'
import yellow from '../images/yellow.png'
import { useTranslation } from "react-i18next";
import "../translations/i18n";
function BoduProducts() {
    const [t, i18n] = useTranslation();

    return (
        <div className="body__products">
            <div className="bodyProduct__one__all">

                <div className="bodyProduct__secand">
                    <img className="yellow" src={yellow} />
                    <img className="MaskProducts" src={MaskProducts} />
                </div>
                <div className="bodyprduct__one">
                    <h1>   {t("Start")}

                    </h1>
                    <h1> {t("project")}
</h1>
                    <h1> {t("with")} </h1>
                    <div className="p__products">
                        <p>   {t("Lorem")}   </p>
                             <p>  {t("lor")} </p>
                    </div>
                    <div className="s__p"> 
                    <div class="toggle-switch-container">
    <div class="toggle-switch switch-vertical">
      <input id="toggle-a" type="radio" name="switch" checked="checked" />
       <input id="toggle-b" type="radio" name="switch" />
       <span class="toggle-outside">
        <span class="toggle-inside"></span>
      </span>
      </div>
    
    </div>
    <br />
    <p className="swi__p">  {t("let")}</p>

 </div>
                </div>
              
            </div>
        </div>
    )
}

export default BoduProducts
