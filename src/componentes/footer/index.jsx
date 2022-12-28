import React from "react";
import './style.css'
const FooterContainer = ()=>{
return(   
<footer className="footerStyles">
      <div style={{display:'flex', flexDirection:'column', width:'100%', margin:'0 40px'}}>
        <hr />
        <div className="d-flex justify-content-between">
          <a className="nav-link" href="/#">Anticuario</a>
          <a className="nav-link" href="/#">anticuarioBa@gmail.com</a>
        </div>
      </div>
    </footer>

)
}
export default FooterContainer;