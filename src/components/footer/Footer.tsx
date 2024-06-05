import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import insta_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'


function Footer(){
    return <>
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icon-conatiner">
                    <img src={insta_icon} alt="" />
                </div>
                <div className="footer-icon-conatiner">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icon-conatiner">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2023 - All rights reserved </p>
            </div>
        </div>
    </>
}

export default Footer