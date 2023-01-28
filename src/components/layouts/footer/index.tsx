import Facebook from "../../atoms/facebook";
import Instagram from "../../atoms/instagram";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-row-image">
        <img src="/assets/images/sample_img.png" />
      </div>
      <div className="footer-row-info">
        <div className="col-6 contact-info">
          <div className="footer-row-info-logo">
            <img src="/assets/images/logo_m.png" />
            We sell only sweater
          </div>
          <div className="footer-row-info-contact">
            Tel: 0312345678
            <br />
            Email: onlysweater@jp.com
          </div>
        </div>
        <div className="col-6">
          <ul className="footer-menu">
            <li className="footer-menu-item">About</li>
            <li className="footer-menu-item">Item</li>
            <li className="footer-menu-item">Shop</li>
            <li className="footer-menu-item">Info</li>
            <li className="footer-menu-item">Press</li>
            <li className="footer-menu-item">
              <Facebook />
              <Instagram />
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