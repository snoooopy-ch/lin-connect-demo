import SectionTitle from "../../atoms/section-title";
import LinkButton from "../../molecules/linkbutton"
import { Align } from "../../../models"
import "./style.scss";

const About: React.FC = () => {
	return (
		<section className="about">
			<div className="about-container">
				<div className="about-container-image pc">
					<img className="about-container-image-pc-img" src="./assets/images/about_img.png" />
				</div>
				<div className="about-container-image sp">
					<img className="about-container-image-sp-img" src="./assets/images/about_img.png" />
					<img className="about-container-image-sp-img" src="./assets/images/about_img2.png" />
				</div>
				<div className="about-container-text">
					<SectionTitle 
						title='About'
						align={Align.CENTER}
					/>
					<p>着るだけで心が満たされていくそんなセーターを作るために<br />セーターだけを販売するOnly Sweaterを立ち上げました。</p><br />
					<p>冬の季節にしか着ないセーターだけれど、<br />少しこだわるだけで今年の冬を特別なものにしてもらえるように<br />細部までこだわって作りました。</p><br />
					<p>あなたの冬が特別なものになりますように...</p>

					<LinkButton
						title='View more→'
						link='/'
						align={Align.START}
					/>

					<div className="about-container-text-circle pc" />
				</div>
			</div>
		</section>
	)
};

export default About;