import { LinkButtonProp, Align } from '../../../models'
import "./style.scss";

const About: React.FC<LinkButtonProp> = ({title, link, align}) => {
	return (
		<div className={`align-${align} link-button` }>
			<a href={link}>{title}</a>
		</div>
	)
};

export default About;