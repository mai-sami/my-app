import React from 'react'
import MaskProducts from '../images/MaskProducts.png'
import yellow from '../images/yellow.png'


function BoduProducts() {
    return (
        <div className="body__products">
            <div className="bodyProduct__one__all">

                <div className="bodyProduct__secand">
                    <img className="yellow" src={yellow} />
                    <img className="MaskProducts" src={MaskProducts} />
                </div>
                <div className="bodyprduct__one">
                    <h1>Start  your

                    </h1>
                    <h1>project
</h1>
                    <h1>with a great idea</h1>
                    <div className="p__products">
                        <p>Lorem ipsum dolor sit amet,
                             consectetuer adipiscing elit, sed diam     </p>
                             <p>nonummy nibh euismod tincidunt ut
                              laoreet dolore magna aliquam erat volutpat.</p>
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
    <p className="swi__p">let's go</p>

 </div>
                </div>
              
            </div>
        </div>
    )
}

export default BoduProducts
