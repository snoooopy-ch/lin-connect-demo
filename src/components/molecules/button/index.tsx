import { GlobalColor } from '../../../models'
import "./style.scss";

const Button: React.FC<ButtonProp> = (button) => {
	return (
		<button 
			className={`button text-${button.color} button-${button.background}`}>
			{ button.text}
		</button> 
	)
};

export default Button;

export interface ButtonProp {
	text: string;
	color: GlobalColor,
	background: GlobalColor,
	type: string;
	onClick?: (event: MouseEvent) => void;
}