import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./Subscriptionpage.css";

const Subscriptionpage = () => {
	return (
		<div className="container py-3">
			<header className="pricing-header p-3 pb-md-4 mx-auto text-center">
				<h1 className="display-4  subscription__page-heading">
					Subscription Plans
				</h1>
			</header>
			<hr className="hr" />

			<div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
				<div className="col">
					<div className="card mb-4 rounded-3 shadow-sm border h-100 d-flex flex-column">
						<div className="card-header py-3 text-white subscription__header">
							<h4 className="my-0 subscription__heading">Basic</h4>
						</div>
						<div className="card-body subscription__card-body">
							<h1 className="card-title pricing-card-title subscription__price">
								$14.99
								<small className="text-body-secondary fw-light">/mo</small>
							</h1>
							<ul className="pricing-list list-unstyled mt-3 mb-4">
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									Free fertilizer
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									20% off for first pot replacement
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									15% off for second pot replacement
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									20% off for first tree replacement
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									15% off from the second tree replacement
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									Over the phone assistance
								</li>
							</ul>
							<div className="card-footer border-0">
								<button
									type="button"
									className="w-100 btn btn-lg subscription__button-color subscription__button-text"
								>
									Start today
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card mb-4 rounded-3 shadow-sm border border-white h-100">
						<div className="card-header py-3 text-white subscription__header">
							<h4 className="my-0 subscription__heading">Premium</h4>
						</div>
						<div className="card-body subscription__card-body">
							<h1 className="card-title pricing-card-title subscription__price">
								$29.99
								<small className="text-body-secondary fw-light">/mo</small>
							</h1>
							<ul className="pricing-list list-unstyled mt-3 mb-4">
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									Free fertilizer with extra nutrients
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									30% off for first pot replacement
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									25% off for second pot replacement
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									Free first tree replacement
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									15% off from the second tree replacement
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									Per 1 month specialist visit
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									50% off extra fertilizer
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									Over the phone assistance
								</li>
							</ul>
							<button
								type="button"
								className="w-100 btn btn-lg  subscription__button-color subscription__button-text"
							>
								Start today
							</button>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card mb-4 rounded-3 shadow-sm border border-white h-100">
						<div className="card-header py-3 text-white subscription__header">
							<h4 className="my-0 subscription__heading">Luxury</h4>
						</div>
						<div className="card-body subscription__card-body">
							<h1 className="card-title pricing-card-title subscription__price">
								$34.99
								<small className="text-body-secondary fw-light">/mo</small>
							</h1>
							<ul className="pricing-list list-unstyled mt-3 mb-4 text-left">
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									Free fertilizer with extra nutrients
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									30% off for first pot replacement
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									25% off for second pot replacement
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									Free first tree replacement
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									15% off from the second tree replacement
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									Per month twice specialist visit
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									50% off extra fertilizer
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									2 free plants then 70% for each
								</li>
								<li>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="me-2 text-success"
									/>
									Over the phone assistance
								</li>
							</ul>
							<button
								type="button"
								className="w-100 btn btn-lg subscription__button-color subscription__button-text"
							>
								Start today
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Subscriptionpage;
