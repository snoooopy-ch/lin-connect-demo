import { LinkButtonProp, Align } from '../../../models'
import "./style.scss";

const About: React.FC<LinkButtonProp> = ({title, link}) => {
	return (
		<div className={`link-button` }>
			<a href={link}>{title}</a>
		</div>
	)
};

export default About;