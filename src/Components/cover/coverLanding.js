import React from "react"
// import '../cover/coverLanding.css'

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="container text-center p-5 text-white" id="landing-content">
          <div className="p-5">
            <h1>Landing template for <span style={{color: "blue", marginBottom: "10px"}}>startups</span></h1>
            <p>Our landing page template works on all devices, so you only have<br/> to set it up once, and get beautiful results forever.</p>
            <div>
              <button className="btn btn-primary mR-5">Get Started</button>
              <button className="btn btn-primary" style={{marginLeft: "15px", backgroundColor:"#151719"}}>View on Github</button>
            </div>
            <div>
              <img src="https://open.cruip.com/static/media/video-placeholder.a622fc5d.jpg" width="896" height="504"></img>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>

  )
}

export default Landing