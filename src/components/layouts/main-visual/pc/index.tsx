import './style.scss';
import MainVisualBanner from '../banner';

const MainVisualPC: React.FC = () => {
  return (
    <div>
      <div className="main-visual-container pc">
        <div className="image-wrapper wrapper1">
          <img className="main_img" src="./assets/images/main_img1.png" />
        </div>
        <div className="image-wrapper wrapper2">
          <div>
            <img className="main_logo" src="./assets/images/logo_m.png" />
            <img className="main_img" src="./assets/images/main_img2.png" />
          </div>
        </div>
        <div className="image-wrapper wrapper3">
          <img className="main_img" src="./assets/images/main_img3.png" />
        </div>
      </div>
      <MainVisualBanner />      
    </div>
  )
}

export default MainVisualPC;