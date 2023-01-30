import "./style.scss";
import "../../../variables.scss"

export interface DotProp {
  size: number;
  color: string;
}

const Dot: React.FC<DotProp> = ({size, color}) => {
	return (
		<div 
			className={`background-${color} dot`}
			style={{
				"height": `${size}px`, 
				"width": `${size}px`,
				"border": `1px solid #D9D9D9`,
				"borderRadius": `${size / 2}px`,
			}}
		>
		</div>
	)
};

export default Dot;