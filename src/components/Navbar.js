import { useState } from 'react';
import '../styles/Navbar.css';
import cartIcon from '../images/icon-cart.svg';
import avatarImg from '../images/image-avatar.png';
import menuIcon from '../images/icon-menu.svg';
import logoImg from '../images/logo.svg';
import closeIconRegular from '../images/icon-close-regular.svg';
import closeIconOrange from '../images/icon-close-orange.svg';
import MenuOverlay from './MenuOverlay';

const Navbar = ({ showCart, setShowCart, cart }) => {
	const [openMenu, setOpenMenu] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const handleToggleShowCart = (e) => {
		e.stopPropagation();
		setShowCart(!showCart);
	};

	return (
		<nav>
			<ul className="nav-links">
				<li>
					<img
						onClick={() => setOpenMenu(true)}
						id="menu"
						src={menuIcon}
						alt="menu icon"
					/>
				</li>
				<li id="logo">
					<img src={logoImg} alt="logo" className="nav-logo-img" />
				</li>
				<li className="link">Collections</li>
				<li className="link">Men</li>
				<li className="link">Women</li>
				<li className="link">About</li>
				<li className="link">Contact</li>
			</ul>
			<ul className={`menu-links ${openMenu ? 'active' : ''}`}>
				<li className="menu-link">
					<img
						onMouseEnter={(e) => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						className="close-icon-menu"
						onClick={() => setOpenMenu(false)}
						src={isHovered ? closeIconOrange : closeIconRegular}
						alt="close icon"
					/>
				</li>
				<li className="menu-link">Collections</li>
				<li className="menu-link">Men</li>
				<li className="menu-link">Women</li>
				<li className="menu-link">About</li>
				<li className="menu-link">Contact</li>
			</ul>
			<div className="nav-profile">
				<div className="nav-profile-cart" onClick={handleToggleShowCart}>
					<img src={cartIcon} alt="cart icon" />
					{cart[0]?.count ? (
						<div className="nav-profile-cart-count">{cart[0].count}</div>
					) : null}
				</div>
				<img src={avatarImg} alt="avatar" className="nav-profile-avatar" />
			</div>
			<MenuOverlay openMenu={openMenu} setOpenMenu={setOpenMenu} />
		</nav>
	);
};
export default Navbar;
