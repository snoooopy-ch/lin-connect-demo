import Facebook from "../../atoms/facebook";
import Instagram from "../../atoms/instagram";
import Hamburger from "../../molecules/hamburger";
import "./style.scss";

const Header: React.FC = () => {
	return (
		<header>
			<div className="header">
				<div className="pc">
					<div className="header-content flex-btw">
						<div className="flex-end middle">
							<div className="banner-menu">
								<h1 className="logo"><a href="./index.html"><img className="logo_img" src="/assets/images/logo_s.png" alt="" /></a>We sell only sweaters</h1>
								<nav role="navigation">
									<ul className="menu-list">
										<li className="menu-item"><a href="/">About</a></li>
										<li className="menu-item"><a href="/">Item</a></li>
										<li className="menu-item"><a href="/">Shop</a></li>
										<li className="menu-item"><a href="/">Info</a></li>
										<li className="menu-item"><a href="/">Press</a></li>
										<li className="menu-item">
											<a className="mr-16" href="/"><Instagram /></a>
											<a href="/"><Facebook /></a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>

				<nav className="sp site-nav">
					<h1 className="logo"><a href="./index.html"><img src="/assets/images/logo_s.png" alt="" /></a>We sell only sweaters</h1>
					<div className="menu-toggle">
						<Hamburger />
					</div>
				</nav>
			</div>
		</header>
	)
};

export default Header;