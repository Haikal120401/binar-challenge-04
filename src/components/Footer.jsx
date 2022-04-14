import React from 'react';
import '../assets/css/footer.css';
import IconFB from '../assets/img/icon_facebook.png';
import IconIG from '../assets/img/icon_instagram.png';
import IconMail from '../assets/img/icon_mail.png';
import IconTwitch from '../assets/img/icon_twitch.png';
import IconTwitter from '../assets/img/icon_twitter.png';


const Footer =() =>{
    return (
        <div className="container">
            <footer>
                <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <ul>
                    <li>Our Services</li>
                    <li>Why Us</li>
                    <li>Testimonial</li>
                    <li>FAQ</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <p>Connecting with us</p>
                    <img src={IconFB} alt="faceboook"/>
                    <img src={IconIG} alt="instagram"/>
                    <img src={IconMail} alt="mail"/>
                    <img src={IconTwitter} alt="twitter"/>
                    <img src={IconTwitch} alt="twitch"/>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <p>Copyright Binar 2022</p>
                    <p>Binarentcar</p>  
                </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;