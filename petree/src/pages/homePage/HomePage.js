import Heroimage from "../../assets/images/landing page.jpeg";
import Featuredtrees from "../../component/bestSellingTrees/Bestsellingtrees";
import Featuredpots from "../../component/bestSellingPots/Bestsellingpots";
import Comments from "../../component/comments/Comments";
import Gallery from "../../component/gallery/Gallery";
//import Products from "../../components/products/Products";
import "./homePage.css";
import Aboutus from"../aboutuspage/Aboutuspage";

const Homepage = () => {
  return (
    <div>
      <div>
        <div style={{ overflow: "hidden" }}>
          <img className="hero w=100" src={Heroimage} alt="Hero" />
          <div>
            {/*<h1 class="custom-text">Responsive left-aligned hero with image</h1>*/}
          </div>
        </div>
      </div>
      <div>
        <Featuredtrees />
        <Featuredpots />
        <Comments /> 
        <Gallery />
        <Aboutus/>
        {/* <Products /> */}
      </div>
    </div>
  );
};

export default Homepage;
