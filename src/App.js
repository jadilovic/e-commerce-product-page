import { useState } from 'react';
import Navbar from './components/Navbar';
import './styles/App.css';
import CartModal from './components/CartModal';

function App() {
	const [cart, setCart] = useState([]);
	const [sneakers, setSneakers] = useState({
		brand: 'sneakers company',
		name: 'fall limited edition sneakers',
		description:
			'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
		price: 125,
		discount: '50%',
		prevPrice: '$250.00',
		count: 0,
	});
	const [showCart, setShowCart] = useState(false);

	return (
		<div className="app-container">
			<Navbar />
			<CartModal />
			<h1>E-commerce product page - sneakers</h1>
		</div>
	);
}

export default App;
