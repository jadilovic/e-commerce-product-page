import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './styles/App.css';
import CartModal from './components/CartModal';
import productImageThumb1 from './images/image-product-1-thumbnail.jpg';
import productImage1 from './images/image-product-1.jpg';
import productImageThumb2 from './images/image-product-2-thumbnail.jpg';
import productImage2 from './images/image-product-2.jpg';
import productImageThumb3 from './images/image-product-3-thumbnail.jpg';
import productImage3 from './images/image-product-3.jpg';
import productImageThumb4 from './images/image-product-4-thumbnail.jpg';
import productImage4 from './images/image-product-4.jpg';
import Images from './components/Images';
import Description from './components/Description';
import ImagesModal from './components/ImagesModal';
import Overlay from './components/Overlay';

function App() {
	const [cart, setCart] = useState([]);
	const [sneakers, setSneakers] = useState({
		id: 1,
		brand: 'sneakers company',
		name: 'fall limited edition sneakers',
		description:
			'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
		price: 125,
		discount: '50%',
		prevPrice: '$250.00',
		count: 3,
		imagesThumbnails: [
			productImageThumb1,
			productImageThumb2,
			productImageThumb3,
			productImageThumb4,
		],
		images: [productImage1, productImage2, productImage3, productImage4],
	});
	const [showCart, setShowCart] = useState(false);
	const [showImageModal, setShowImageModal] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setScreenWidth(window.innerWidth);
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleAddToCart = () => {
		setCart([sneakers]);
	};

	return (
		<div onClick={() => setShowCart(false)} className="app-container">
			<Navbar showCart={showCart} setShowCart={setShowCart} cart={cart} />
			{showCart && <CartModal cart={cart} setCart={setCart} />}
			<main>
				<Images
					images={sneakers.images}
					imagesThumbnails={sneakers.imagesThumbnails}
					setShowImageModal={setShowImageModal}
					screenWidth={screenWidth}
				/>
				<Description
					product={sneakers}
					setProduct={setSneakers}
					handleAddToCart={handleAddToCart}
				/>
			</main>
			{showImageModal ? (
				<ImagesModal
					images={sneakers.images}
					imagesThumbnails={sneakers.imagesThumbnails}
					setShowImageModal={setShowImageModal}
				/>
			) : null}
			<Overlay
				isModalOpen={showImageModal}
				setIsModalOpen={setShowImageModal}
				screenWidth={screenWidth}
			/>
			<div className="attribution">
				Challenge by:{' '}
				<a href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6">
					Frontend Mentor - E-commerce Product Page
				</a>
				. Coded by:{' '}
				<a href="https://www.frontendmentor.io/profile/jadilovic">
					Jasmin Adilovic
				</a>
				.
			</div>
		</div>
	);
}

export default App;
