import React from "react";
// import '../styles/coverWorkflow.css'
import Card from "./workflowCard";

const Workflow = ()=>{
    return(
        <>
        <div className="workflow">
           <div className ="container text-center" id="workflow-content" >
                <h1>Workflow that just works</h1>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui<br/> officia deserunt mollit anim id est laborum — semper quis lectus<br/> nulla at volutpat diam ut venenatis.</p>
           </div>
           <Card/>
           <div className="card">
            <div className="container text-center" id="card-content">
            <div style={{marginRight:"100px"}}>
                   <img src="https://open.cruip.com/static/media/features-split-image-01.d9cb99ce.png" height="396" width="528"></img>
                </div>
                <div style={{ marginTop:"60px", width:"528px"}}>
                   <a href="#">LIGHTNING FAST WORKFLOW</a>
                   <h1>Data-driven insights</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod tempor incididunt ut labore et<br/> dolore magna aliqua — Ut enim ad minim veniam,<br/> quis nostrud exercitation ullamco laboris nisi ut<br/> aliquip ex ea commodo consequat.</p>
                </div>
                
            </div>
            <Card/>
        </div>
        </div>
        </>
    )
}

export default Workflow