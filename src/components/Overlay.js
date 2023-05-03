import { useEffect } from 'react';
import '../styles/ImagesModal.css';

const Overlay = ({ isModalOpen, setIsModalOpen, screenWidth }) => {
	useEffect(() => {
		if (screenWidth < 760) {
			setIsModalOpen(false);
		}
	}, [screenWidth]);

	return (
		<div
			className="overlay"
			onClick={() => setIsModalOpen(false)}
			style={{
				display: `${isModalOpen ? 'block' : 'none'}`,
			}}
		></div>
	);
};

export default Overlay;
