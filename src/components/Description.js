import { useState } from 'react';
import iconMinus from '../images/icon-minus.svg';
import iconPlus from '../images/icon-plus.svg';
import cartIconWhite from '../images/icon-cart-white.svg';
import Button from '../components/Button';

const Description = ({ product, setProduct, handleAddToCart }) => {
	const [count, setCount] = useState(product.count);

	const handleDecreaseCount = () => {
		if (count > 0) {
			setCount(count - 1);
			product.count = count - 1;
			setProduct({ ...product });
		}
	};

	const handleIncreaseCount = () => {
		setCount(count + 1);
		product.count = count + 1;
		setProduct({ ...product });
	};

	return (
		<section>
			<h1>{product.brand}</h1>
			<h2>{product.name}</h2>
			<p className="product-description">{product.description}</p>
			<article>
				<span className="product-price">{product.price.toFixed(2)}</span>
				<span className="product-discount">{product.discount}</span>
			</article>
			<p className="previous-price">{product.prevPrice}</p>
			<div className="product-selection">
				<div className="product-count">
					<img
						className="decrease-count"
						src={iconMinus}
						alt="decrease count"
						onClick={handleDecreaseCount}
					/>
					<span className="count">{count}</span>
					<img
						className="increase-count"
						src={iconPlus}
						alt="increase count"
						onClick={handleIncreaseCount}
					/>
				</div>
				<Button
					image={cartIconWhite}
					text="Add to Cart"
					callBack={handleAddToCart}
				/>
			</div>
		</section>
	);
};
export default Description;
