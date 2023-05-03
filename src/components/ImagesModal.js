import { useState } from 'react';
import closeIcon from '../images/icon-close.svg';
import closeIconOrange from '../images/icon-close-orange.svg';
import previousIcon from '../images/icon-previous.svg';
import previousIconOrange from '../images/icon-previous-orange.svg';
import nextIcon from '../images/icon-next.svg';
import nextIconOrange from '../images/icon-next-orange.svg';
import '../styles/ImagesModal.css';

const ImagesModal = ({ images, imagesThumbnails, setShowImageModal }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [hoveredElement, setHoveredElement] = useState(null);

	const handlePrevious = () => {
		if (currentImageIndex > 0) {
			setCurrentImageIndex(currentImageIndex - 1);
		} else {
			setCurrentImageIndex(images.length - 1);
		}
	};

	const handleNext = () => {
		if (currentImageIndex < images.length - 1) {
			setCurrentImageIndex(currentImageIndex + 1);
		} else {
			setCurrentImageIndex(0);
		}
	};

	return (
		<div className="modal-container">
			<img
				onMouseEnter={(e) => setHoveredElement(e.target.className)}
				onMouseLeave={() => setHoveredElement(null)}
				className="close-icon"
				onClick={() => setShowImageModal(false)}
				src={hoveredElement === 'close-icon' ? closeIconOrange : closeIcon}
				alt="close icon"
			/>
			<div className="current-image-container">
				<img
					className="current-image-modal"
					src={images[currentImageIndex]}
					alt="current img"
				/>
				<img
					onMouseEnter={(e) => setHoveredElement(e.target.id)}
					onMouseLeave={() => setHoveredElement(null)}
					onClick={handlePrevious}
					src={
						hoveredElement === 'previous' ? previousIconOrange : previousIcon
					}
					alt="previous icon"
					id="previous"
				/>
				<img
					onMouseEnter={(e) => setHoveredElement(e.target.id)}
					onMouseLeave={() => setHoveredElement(null)}
					onClick={handleNext}
					src={hoveredElement === 'next' ? nextIconOrange : nextIcon}
					alt="next-icon"
					id="next"
				/>
			</div>
			<div className="all-images-modal">
				{imagesThumbnails.map((image, index) => {
					return (
						<div
							key={index}
							className={`image-wrapper ${
								currentImageIndex === index ? 'border' : ''
							}`}
						>
							<img
								onClick={() => setCurrentImageIndex(index)}
								className={`thumbnail-image ${
									currentImageIndex === index ? 'selected-image' : ''
								}`}
								src={image}
								alt="thumbnail img"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default ImagesModal;
