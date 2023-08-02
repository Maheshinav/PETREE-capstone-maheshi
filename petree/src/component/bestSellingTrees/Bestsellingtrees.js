import "./bestsellingtrees.css";
import Appletree from "../../assets/images/dwarf apple.jpeg";
import Bananatree from "../../assets/images/dwarf banana tree.jpg";
import Lemontree from "../../assets/images/dwarf lemon tree.jpeg";
import Ratings from "../../assets/icons/🦆 icon _star.svg";
import Secondimage from "../../assets/images/Landing page 2.jpg";

const Featuredtrees = () => {
  return (
    <div>
      <div>
        <h1 className="page-title">Best Selling Trees!</h1>
      </div>
      <div id="myCarousel" className="carousel slide mb-6 carousel__padding" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div class="card container d-flex justify-content-center carousel__card-border" style={{ width: '18rem' }}>
                  <img src={Appletree} class="card-img-top carousel__image" alt="dwarf-apple-tree" />
                  <div class="card-body">
                    <h5 class="carousel__card-title">Dwarf Apple Tree</h5>
                    <p class="carousel__card-price">$17.00</p>
                    <img className="carousel__ratings" src={Ratings} alt="ratings-icon" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div class="card container d-flex justify-content-center carousel__card-border" style={{ width: '18rem' }}>
                  <img src={Appletree} class="card-img-top carousel__image" alt="dwarf-apple-tree" />
                  <div class="card-body">
                    <h5 class="carousel__card-title">Dwarf Apple Tree</h5>
                    <p class="carousel__card-price">$17.00</p>
                    <img className="carousel__ratings" src={Ratings} alt="ratings-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add more carousel items here */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div class="card container d-flex justify-content-center carousel__card-border" style={{ width: '18rem' }}>
                  <img src={Bananatree} class="card-img-top carousel__image" alt="dwarf-banana-tree" />
                  <div class="card-body">
                    <h5 class="carousel__card-title">Dwarf Banana Tree</h5>
                    <p class="carousel__card-price">$17.00</p>
                    <img className="carousel__ratings" src={Ratings} alt="ratings-icon" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div class="card container d-flex justify-content-center carousel__card-border" style={{ width: '18rem' }}>
                  <img src={Lemontree} class="card-img-top carousel__image" alt="dwarf-lemon-tree" />
                  <div class="card-body">
                    <h5 class="carousel__card-title">Dwarf Lemon Tree</h5>
                    <p class="carousel__card-price">$17.00</p>
                    <img className="carousel__ratings" src={Ratings} alt="ratings-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon carousel__slide-buttons" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next " type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon carousel__slide-buttons" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div>
        <div style={{ position: 'relative', overflow: "hidden" }}>
          <img  className="hero w=100" style={{ width: '100%' }} src={Secondimage} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Featuredtrees;
