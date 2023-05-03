import { useState } from 'react';
import previousIcon from '../images/icon-previous.svg';
import previousIconOrange from '../images/icon-previous-orange.svg';
import nextIcon from '../images/icon-next.svg';
import nextIconOrange from '../images/icon-next-orange.svg';

const Images = ({
	images,
	imagesThumbnails,
	setShowImageModal,
	screenWidth,
}) => {
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

	const handleShowImageModal = () => {
		if (screenWidth > 760) {
			setShowImageModal(true);
		}
	};

	return (
		<section>
			<div className="mobile-current-image">
				<img
					className="current-image"
					src={images[currentImageIndex]}
					alt="current img"
					onClick={handleShowImageModal}
				/>
				{screenWidth < 1000 && (
					<>
						<img
							onMouseEnter={(e) => setHoveredElement(e.target.id)}
							onMouseLeave={() => setHoveredElement(null)}
							onClick={handlePrevious}
							src={
								hoveredElement === 'previous'
									? previousIconOrange
									: previousIcon
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
					</>
				)}
			</div>
			<div className="all-images">
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
		</section>
	);
};
export default Images;
