import React from "react";
// import '../styles/coverBuilding.css'
import BuildCard from "./BuildCard";

const Building = ()=>{
    return(
        <>
        <div className="build">
            <div id="build-content" className="text-center text-white">
                <h1>Build up the whole picture</h1>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui<br/> officia deserunt mollit anim id est laborum — semper quis lectus<br/> nulla at volutpat diam ut venenatis.</p>
                <BuildCard />
                <BuildCard />
                
            </div>
            
        </div>
        </>
    )
}

export default Building