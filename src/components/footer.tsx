import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import "./footer.css";
import {
  FaLocationDot,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Logo from "./logo";
import { BsArrowUpSquareFill } from "react-icons/bs";


const Footer = () => {
//  window.addEventListener("scroll", ()=>{
//   const backToTop=document.querySelector(".back-to-top");
//   if(
//     window.pageYOffset>100
//   ){
//     backToTop.classList.add("active")
//   }
//   else{
//     backToTop.classList.remove("active")
//   }
//  })

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="logo-details">
           <Logo/>
              <p className="description">
                We help Kenyan designers <br /> find the resources they need{" "}
                <br />
                for their design projects
              </p>
              <a href="">
                <MdEmail size="20px" /> <p>info@designershub.co.ke</p>
              </a>
              <span>
                {" "}
                <FaLocationDot size="20px" /> <p>Nairobi Kenya</p>
              </span>
            </div>

            <div className="useful-links">
              <h3>Useful Links</h3>
              <a href="/home">Home</a>
              <a href="/resources">Resources</a>
              <a href="#benefits">Benefits</a>
              <a href="/hire a designer">Hire Designer</a>
              <a href="#">Sell Assets</a>
              <a href="#">Community</a>
            </div>

            <div className="support">
              <h3>Support</h3>
              <a href="#">FAQs</a>
              <a href="#">Contacts</a>
              <h3>Legal</h3>
              <a href="#">Terms of use</a>
            </div>

            <div className="social-media">
              <h3>Social Media</h3>
              <div className="soc-icons">
                <a href="#">
                  <FaFacebookSquare size="40px" />
                </a>
                <a href="#">
                  <FaSquareXTwitter size="40px" />
                </a>
                <a href="#">
                  <FaSquareInstagram size="40px" />
                </a>
                <a href="#">
                  <FaLinkedin size="40px" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div >
          <hr className="hr"/>
          <p className="copyright">
            Copyright @2024 CreativesHub. All rights reserved{" "}
          </p>
          <a href="" className="back-to-top"><BsArrowUpSquareFill size="30px" color="var(--light-green)" /></a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
