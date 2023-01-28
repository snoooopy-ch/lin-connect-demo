import './style.scss';
import MainVisualBanner from '../banner';

const MainVisualSP: React.FC = () => {
  return (
    <div className="main-visual-container sp">
      <div>
        <img className="main_img" src="./assets/images/main_img2.png" />
      </div>
      <MainVisualBanner />
      <img src="./assets/images/logo_m.png" />
      <div>
        <img className="main_img" src="./assets/images/main_img1.png" />
        <img className="main_img" src="./assets/images/main_img3.png" />
      </div>
    </div>
  )
}

export default MainVisualSP;