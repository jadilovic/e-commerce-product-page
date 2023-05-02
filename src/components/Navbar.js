import '../styles/Navbar.css';
import cartIcon from '../images/icon-cart.svg';
import avatarImg from '../images/image-avatar.png';
import logoImg from '../images/logo.svg';

const Navbar = ({ showCart, setShowCart, cart }) => {
	return (
		<nav>
			<ul className="nav-links">
				<li>
					<img src={logoImg} alt="logo" className="nav-logo-img" />
				</li>
				<li>Collections</li>
				<li>Men</li>
				<li>Women</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
			<div className="nav-profile">
				<div
					className="nav-profile-cart"
					onClick={() => setShowCart(!showCart)}
				>
					<img src={cartIcon} alt="cart icon" />
					{cart[0]?.count ? (
						<div className="nav-profile-cart-count">{cart[0].count}</div>
					) : null}
				</div>
				<img src={avatarImg} alt="avatar" className="nav-profile-avatar" />
			</div>
		</nav>
	);
};
export default Navbar;
