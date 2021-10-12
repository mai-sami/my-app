import React from 'react'
import { useTranslation } from "react-i18next";
import "../translations/i18n";
function Privacy() {
    const [t, i18n] = useTranslation();

    return (
        <div className="contact">
        <div className="form">
        
          <div className="TermsCondition">
             <h1 className="h__form__tearms">   {t("Privacy")} </h1>
             <p className="Terms__p">  
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna .. aliquam erat volutpat. Ut wisi enim ad minim veniam, 
             quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                 </p>
          
        
        <p className="Terms__p">  
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
        diam nonummy nibh euismod tincidunt ut laoreet dolore magna .. aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip .. ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie 
        consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et 
                 </p>
              
        <p className="Terms__p">  
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna .. aliquam erat volutpat. Ut wisi enim ad minim veniam,
         quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip .. 
         ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate 
         velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                 </p> 
          </div>
                 
          
        
        
         </div>
         
    </div>
    )
}

export default Privacy
