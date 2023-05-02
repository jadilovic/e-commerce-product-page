import Button from './Button';
import ProductCard from './ProductCard';
import '../styles/CartModal.css';

const CartModal = ({ cart, setCart }) => {
	return (
		<div className="cart-modal">
			<div className="cart-modal-title">Cart</div>
			{cart.length > 0 ? (
				<div className="cart-modal-products">
					{cart.map((product) => {
						return (
							<ProductCard
								key={product.id}
								product={product}
								setCart={setCart}
							/>
						);
					})}
					<Button text="Checkout" />
				</div>
			) : (
				<div className="empty-cart">
					<p>Your cart is empty</p>
				</div>
			)}
		</div>
	);
};
export default CartModal;
