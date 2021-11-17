import React from 'react'
import Groupsocail from '../images/Groupsocail.png'

import expertoss from '../images/expertoss.png'
import AppleIcon from '@mui/icons-material/Apple';
import googlePlay from '../images/googlePlay.png'
import { useTranslation } from "react-i18next";
import "../translations/i18n";
function Footer() {
  const [t, i18n] = useTranslation();

  return (
    <div className="footer">


      <div className="footer__contaner">
        <div className="part">
          <img src={expertoss} alt="" />
          <br />

          <div className="p__footer">
            <p> {t("AS")}

            </p>
            <br />
            <p>
            {t("AD")}
            </p>
          </div>

        </div>
        <div className="grid__all">
          <div className="grid">

             <ul className="ul">
            <h2 className="ct_footer ">  {t("HOME")}   </h2>
            <li>
                <a className="a__a" >  </a>
              </li>
              <li>
                <a className="a__a" href="/about"> {t("About")}   </a>
              </li>
              <li>
                <a className="a__a" href="">{t("Investors")} </a>
              </li>
              <li>
                <a className="a__a" href="/terms">{t("Terms")}   </a>
              </li>
              <li>
                <a className="a__a" href="/privacy">{t("Privacy")}  </a>
              </li>
              <div className="div__a">
                <li>
                  <a className="a__as" href="/">{t("Blog")}   </a>
                </li> <li>
                  <a className="a__as" href="/"> {t("Jobs")}  </a>
                </li> <li>
                  <a className="a__as" href="/"> {t("FAQ")}  </a>
                </li>
              </div>
            </ul>
          </div>
          <div className="gridfooters">


             <ul className="ul">
             <h2 class="ct_footer">  {t("Services")} </h2>
             <li>
                <a className="a__a" >  </a>
              </li>
              <li>
                <a className="a__a" href="/product"> {t("Business")} </a>
              </li>
              <li>
                <a className="a__a" href="/s"> {t("Personal")} </a>
              </li>
              <li>
                <a className="a__a" href="/s"> {t("Providers")} </a>
              </li>

            </ul>
          </div>

          <div className="gridfooter">
             <div className="socail">
             <h2 class="ct_footer"> {t("Contact")}     </h2>

              <img src={Groupsocail} alt="" />

              <div className="App__stores">


                <div className="boxx__Store">

                  <img src={googlePlay} className="icons" />
                  <div className="icon__text">
                    <span className="available"> GIT IT ON    </span>
                    <span className="text__app">  Google Play</span>
                  </div>

                </div>
                <div className="boxx__Store">
                  <AppleIcon style={{ fontSize: 30 }} className="icon" />
                  <div className="icon__text">
                    <div className="available">Available on the</div>
                    <div className="text__app">App Store</div>
                  </div>

                </div>
              </div>

            </div>
          </div>


        </div>

      </div>
      <br />
      <br />

      <hr className="hr__h" />
      <div class="bottom">
        <p> {t("Copyright")}   </p>
      </div>
    </div>
  )
}

export default Footer

