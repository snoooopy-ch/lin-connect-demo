import "./style.scss";
import {SectionTitleProp} from "../../../models"

const SectionTitle: React.FC<SectionTitleProp> = ({title}) => {
	return (
		<div className="section-title">
			<h2>{ title }</h2>
		</div>
	)
};

export default SectionTitle;