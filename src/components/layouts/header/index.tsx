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
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>

				<nav className="sp site-nav">
					<h1 className="logo"><a href="./index.html"><img src="/assets/images/logo_s.png" alt="" /></a>We sell only sweaters</h1>

					<div className="menu-toggle">
						<span className="line-1"></span>
						<span className="line-2"></span>
						<span className="line-3"></span>
					</div>

					<ul className="sp-menu open desktop">
						<li><a href="/">About</a></li>
						<li><a href="/">Item</a></li>
						<li><a href="/">Shop</a></li>
						<li><a href="/">Info</a></li>
						<li><a href="/">Press</a></li>
						<li><a href="tel:0312345678">Tel: 0312345678</a></li>
						<li><a href="email:onlysweater@jp.com">onlysweater@jp.com</a></li>
					</ul>
				</nav>
			</div>
		</header>
	)
};

export default Header;