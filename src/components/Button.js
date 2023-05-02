const Button = ({
	image = null,
	text,
	callBack = () => console.log('Checkout clicked'),
}) => {
	return (
		<button onClick={() => callBack()}>
			{image ? <img src={image} alt="cart icon" /> : null}
			{text}
		</button>
	);
};
export default Button;
