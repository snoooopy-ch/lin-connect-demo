import Facebook from "../../atoms/facebook";
import Instagram from "../../atoms/instagram";
import './style.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-row-image">
        <img className="pc" src="/assets/images/sample_img.png" />
        <img className="pc" src="/assets/images/sample_img.png" />
        <img className="pc" src="/assets/images/sample_img.png" />
        <img className="pc" src="/assets/images/sample_img.png" />
        <img className="sp" src="/assets/images/sample_img.png" />
        <div className="footer-row-image-logo">
          <img src="/assets/images/logo_m.png" />
        </div>
      </div>
      <div className="footer-row-info">
        <div className="col-6 contact-info">
          <div className="footer-row-info-logo">
            <img className="mr-16" src="/assets/images/logo_m.png" />
            <div>We sell only sweater</div>
          </div>
          <div className="footer-row-info-contact">
            Tel: 0312345678
            <br />
            Email: onlysweater@jp.com
          </div>
        </div>
        <div className="col-6">
          <ul className="footer-menu">
            <li className="footer-menu-item"><a href="/">About</a></li>
            <li className="footer-menu-item"><a href="/">Item</a></li>
            <li className="footer-menu-item"><a href="/">Shop</a></li>
            <li className="footer-menu-item"><a href="/">Info</a></li>
            <li className="footer-menu-item"><a href="/">Press</a></li>
            <li className="footer-menu-item">
              <a className="mr-16" href="/"><Facebook /></a>
              <a href="/"><Instagram /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-row-copyright">
        2022@only sweater
      </div>
    </footer>
  )
}

export default Footer;