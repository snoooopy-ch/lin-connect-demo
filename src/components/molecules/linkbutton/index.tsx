import { Align } from '../../../models'
import "./style.scss";

export interface LinkButtonProp {
  title: string;
  link: string;
  align?: Align;
}

const About: React.FC<LinkButtonProp> = ({title, link}) => {
	return (
		<div className={`link-button` }>
			<a href={link}>{title}</a>
		</div>
	)
};

export default About;