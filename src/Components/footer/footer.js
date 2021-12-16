import React from "react";
// import FooterCard from "./footerCard";
// import '../styles/footer.css'

const Footer = ()=>{
    return(
        <>
        <div className="footer">
               <div className="container text-center" id="footer-content">
               <div>
                    <h1 style={{color:"white"}}>Customer testimonials</h1>
                    <p style={{color:"white"}}>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis<br /> semper quis lectus nulla at volutpat diam ut venenatis tellus—in<br /> ornare.</p>
                </div>
                {/* <FooterCard/> */}
                 <div id="purpleBox" className="row" style={{backgroundColor:"#5658DD"}}>
                    <h2 className="col-6">For previewing layouts and visual?</h2>
                    <input className="col-6"type="text" placeholder="Your best Email"></input>
                 </div>
                 <div id="footerLinks" className="container-fuild">
                    <div>
                        <img src="https://open.cruip.com/static/media/logo.2810a88b.svg"></img>
                        <p>Made by <span>Cruip</span>. All right reserved</p>
                    </div>
                    <div>
                        <ul id="icons">
                            <li><i class="fab fa-facebook"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                        </ul>
                        <div>
                            <ul id="links">
                                <li>Contact</li>
                                <li>About Us</li>
                                <li>FAQs</li>
                                <li>Support</li>
                            </ul>
                        </div>
                    </div>
                 </div>
               </div>
        </div>
        </>
    )
}

export default Footer