import "./bestsellingtrees.css";
import Ratings from "../../assets/icons/🦆 icon _star.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Featuredtrees = () => {
	const [treesData, setTreesData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8080/trees")
			.then((response) => {
				console.log("Fetched data:", response.data);
				setTreesData(response.data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);
	return (
		<div>
			<div className="bestsellingtrees__heading-set d-flex justify-content-center">
				<h1 className="bestsellingtrees__heading">Best Selling Trees!</h1>
			</div>

			<div
				id="myCarousel"
				className="carousel slide mb-6 carousel__padding"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					{treesData.map((tree, index) => (
						<div
							key={index}
							className={`carousel-item ${index === 0 ? "active" : ""}`}
						>
							<div className="bestsellingtrees__card-flex">
								<div className="col-md-6 col-12 mb-3">
									<div
										className="card container d-flex justify-content-center carousel__card-border"
										style={{ width: "18rem" }}
									>
										<img
											src={tree.tree_image}
											className="card-img-top carousel__image"
											alt={tree.tree_name}
										/>
										<div className="card-body">
											<h5 className="carousel__card-title">{tree.tree_name}</h5>
											<p className="carousel__card-price">
												{typeof tree.tree_price === "number"
													? `$${tree.tree_price.toFixed(2)}`
													: ""}
											</p>
											<img
												className="carousel__ratings"
												src={Ratings}
												alt="ratings-icon"
											/>
										</div>
									</div>
								</div>
								{treesData[index + 1] && (
									<div className="col-md-6 col-12 mb-3">
										<div
											className="card container d-flex justify-content-center carousel__card-border"
											style={{ width: "18rem" }}
										>
											<img
												src={treesData[index + 1].tree_image}
												className="card-img-top carousel__image"
												alt={treesData[index + 1].tree_name}
											/>
											<div className="card-body">
												<h5 className="carousel__card-title">
													{treesData[index + 1].tree_name}
												</h5>
												<p className="carousel__card-price">
													{typeof tree.tree_price === "number"
														? `$${tree.tree_price.toFixed(2)}`
														: ""}
												</p>
												<img
													className="carousel__ratings"
													src={Ratings}
													alt="ratings-icon"
												/>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon carousel__slide-buttons"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next "
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon carousel__slide-buttons"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			<div className="has-bg-img">
				<div className="bg-img bg-cover bestsellingtrees__bgimage">
					<p className="bestsellingtrees__quote">
						With Petree You get your own dwarf Green Pet.
					</p>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Featuredtrees;
