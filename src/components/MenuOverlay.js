import '../styles/ImagesModal.css';
const MenuOverlay = ({ openMenu, setOpenMenu }) => {
	return (
		<div
			className="overlay"
			onClick={() => setOpenMenu(false)}
			style={{ display: `${openMenu ? 'block' : 'none'}` }}
		></div>
	);
};

export default MenuOverlay;
