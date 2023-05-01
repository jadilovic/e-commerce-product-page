import deleteIcon from '../images/icon-delete.svg';

const ProductCard = ({ product, setCart }) => {
	return (
		<div className="product-card">
			<img src={product.imagesThumbnails[0]} alt="product img" />
			<div className="product-card-description">
				<p className="product-card-name">{product.name}</p>
				<p className="product-card-cost">{product.price}</p>
			</div>
			<img onClick={() => setCart([])} src={deleteIcon} alt="delete icon" />
		</div>
	);
};
export default ProductCard;
