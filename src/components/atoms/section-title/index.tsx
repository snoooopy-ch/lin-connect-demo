import "./style.scss";

export interface SectionTitleProp {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProp> = (prop: SectionTitleProp) => {
	return (
		<div className={`section-title`}>
			<h2>{ prop.title }</h2>
		</div>
	)
};

export default SectionTitle;