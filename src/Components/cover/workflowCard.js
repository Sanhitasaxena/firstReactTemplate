import React from "react";
// import '../styles/workflowCard.css'

const Card = ()=>{
    return(
        <>
        <div className="card">
            <div className="container text-center" id="card-content">
                <div style={{marginLeft:"10px", marginTop:"60px", width:"528px"}}>
                   <a href="#">LIGHTNING FAST WORKFLOW</a>
                   <h1>Data-driven insights</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod tempor incididunt ut labore et<br/> dolore magna aliqua — Ut enim ad minim veniam,<br/> quis nostrud exercitation ullamco laboris nisi ut<br/> aliquip ex ea commodo consequat.</p>
                </div>
                <div style={{marginLeft:"80px"}}>
                   <img src="https://open.cruip.com/static/media/features-split-image-01.d9cb99ce.png" height="396" width="528"></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card