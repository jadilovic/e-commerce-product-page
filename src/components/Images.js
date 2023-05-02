import { useState } from 'react';

const Images = ({ images, imagesThumbnails, setShowImageModal }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	return (
		<section>
			<img
				className="current-image"
				src={images[currentImageIndex]}
				alt="current img"
				onClick={() => setShowImageModal(true)}
			/>
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
