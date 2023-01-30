import "./style.scss";
import MainVisualPC from "./pc";
import MainVisualSP from "./sp";

const MainVisual: React.FC = () => {
	return (
		<section className="main-visual">
			<MainVisualPC />
			<MainVisualSP />
		</section>
	)
};

export default MainVisual;