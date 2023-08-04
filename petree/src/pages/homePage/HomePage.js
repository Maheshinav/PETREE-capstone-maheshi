import Featuredtrees from "../../component/bestSellingTrees/Bestsellingtrees";
import Featuredpots from "../../component/bestSellingPots/Bestsellingpots";
import Comments from "../../component/comments/Comments";
import Gallery from "../../component/gallery/Gallery";
import "./homePage.css";

const Homepage = () => {
	const heroImage =
		"https://res.cloudinary.com/dchzjr4bz/image/upload/v1691002483/My_project_4_tjtwfu.jpg";
	return (
		<div>
			<div>
				<div style={{ overflow: "hidden" }}>
					<img className="hero w=100" src={heroImage} alt="Hero" />
					<div></div>
				</div>
			</div>
			<div>
				<Featuredtrees />
				<Featuredpots />
				<Comments />
				<Gallery />
			</div>
		</div>
	);
};

export default Homepage;
