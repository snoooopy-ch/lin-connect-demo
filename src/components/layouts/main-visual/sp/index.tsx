import './style.scss';
import MainVisualBanner from '../banner';

const MainVisualSP: React.FC = () => {
  return (
    <div className="main-visual-container sp">
      <div>
        <img className="main_img" src="./assets/images/main_img2.png" />
      </div>
      <MainVisualBanner />
      <div className="logo_img">
        <img src="./assets/images/logo_m.png" />
      </div>
    </div>
  )
}

export default MainVisualSP;