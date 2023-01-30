import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import Facebook from '../../atoms/facebook';
import Instagram from '../../atoms/instagram';
import './style.scss';

class Hamburger extends React.Component {
  showSettings (event: { preventDefault: () => void; }) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu 
        right 
        width={ '100%' } 
        customBurgerIcon={ <img src="/assets/images/burger.svg" /> }
        customCrossIcon={ <img src="/assets/images/close.svg" /> }
        >
          <nav className="sp site-nav">
            <h1 className="logo"><a href="./index.html"><img src="/assets/images/logo_s.png" alt="" /></a>We sell only sweaters</h1>
          </nav>
          <div>
            <ul className="sp-menu">
              <li className="sp-menu-item"><a className="menu-item" href="/">About</a></li>
              <li className="sp-menu-item"><a className="menu-item" href="/">Item</a></li>
              <li className="sp-menu-item"><a className="menu-item" href="/">Shop</a></li>
              <li className="sp-menu-item"><a className="menu-item" href="/">Info</a></li>
              <li className="sp-menu-item"><a className="menu-item" href="/">Press</a></li>
              <li className="sp-menu-item tel"><a href="tel:0312345678">Tel: 0312345678</a></li>
              <li className="sp-menu-item"><a href="email:onlysweater@jp.com">Email:onlysweater@jp.com</a></li>
              <li className="sp-menu-item">
                <a className="mr-16" href="/"><Instagram /></a>
                <a className="mr-16" href="/"><Facebook /></a>
              </li>
            </ul>
          </div>
      </Menu>
    );
  }
}

export default Hamburger;