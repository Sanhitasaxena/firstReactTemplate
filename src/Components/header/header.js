import React from "react";
// import '../header/header.css'
// import './header.module.css'

const Header = ()=>{
    return(
        <>
        <div className="header">
           <div className="container-fuild " id="header-content">
               <div className="logo">
                  <img src="https://open.cruip.com/static/media/logo.2810a88b.svg" height="32px" width="32px"></img>
               </div>
               <div className="navlinks">
                  <a className="text-white" href="#">Documentation</a>
                  <button className="btn btn-primary"><a href="#">Sign Up</a></button>
                  {/* <button className="btn btn-warning btn btn-success">Bootstrap</button> */}
               </div>
           </div>
           
        </div>
        
        </>
    )
}

export default Header