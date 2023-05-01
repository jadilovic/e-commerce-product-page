import { useState } from 'react';
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
		count: 0,
		imagesThumbnails: [
			productImageThumb1,
			productImageThumb2,
			productImageThumb3,
			productImageThumb4,
		],
		images: [productImage1, productImage2, productImage3, productImage4],
	});
	const [showCart, setShowCart] = useState(false);

	const handleAddToCart = () => {
		setCart([sneakers]);
	};

	console.log(cart);

	return (
		<div className="app-container">
			<Navbar showCart={showCart} setShowCart={setShowCart} />
			{showCart && <CartModal cart={cart} setCart={setCart} />}
			<h1>E-commerce product page - sneakers</h1>
			<button onClick={handleAddToCart}>Add to Cart</button>
		</div>
	);
}

export default App;
