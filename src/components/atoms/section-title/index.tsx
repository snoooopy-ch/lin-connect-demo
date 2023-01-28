import "./style.scss";
import {SectionTitleProp} from "../../../models"

const SectionTitle: React.FC<SectionTitleProp> = (prop: SectionTitleProp) => {
	return (
		<div className={`section-title text-${prop.align}`}>
			<h2>{ prop.title }</h2>
		</div>
	)
};

export default SectionTitle;