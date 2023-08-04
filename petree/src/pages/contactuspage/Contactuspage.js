import "./contact.css";

const Contactuspage = () => {
	return (
		<div className="contact__container">
			<h1 className="page-title text-center">Contact Us</h1>
			<div className="d-flex justify-content-center align-items-center my-3">
				<div className="card w-75">
					<div className="card-body text-center">
						<h5 className="card-title">Telephone</h5>
						<p className="card-text">78888990</p>
					</div>
				</div>
			</div>

			<div className="d-flex justify-content-center align-items-center vh-75 my-3">
				<div className="card w-75">
					<div className="card-body text-center">
						<h5 className="card-title">Email</h5>
						<p className="card-text">info@petree.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contactuspage;
