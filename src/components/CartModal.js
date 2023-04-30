import Button from './Button';
import ProductCard from './ProductCard';

const CartModal = () => {
	return (
		<div className="cart-modal">
			<div className="cart-modal-title">Cart</div>
			<div className="cart-modal-products">
				<ProductCard />
			</div>
			<Button />
		</div>
	);
};
export default CartModal;