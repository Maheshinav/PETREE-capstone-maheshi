import "./bestsellingtrees.css";
import Greenpot from '../../assets/images/pot7.jpeg';
import Pinkpot from '../../assets/images/pot5.jpeg';
import Bluepot from '../../assets/images/pot1.jpeg';
import Ratings from "../../assets/icons/🦆 icon _star.svg";

const Featuredpots = () => {
    return (
        <div>
            <div>
      <div>
        <h1 className="page-title">Best Selling Trees!</h1>
      </div>
      <div id="myCarousel" className="carousel slide mb-6 carousel__padding" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-6">
                <div class="card container d-flex justify-content-center carousel__card-border" style={{ width: '18rem' }}>
                  <img src={Greenpot} class="card-img-top carousel__image" alt="dwarf-apple-tree" />
                  <div class="card-body">
                    <h5 class="carousel__card-title">Dwarf Apple Tree</h5>
                    <p class="carousel__card-price">$17.00</p>
                    <img className="carousel__ratings" src={Ratings} alt="ratings-icon" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div class="card container d-flex justify-content-center carousel__card-border" style={{ width: '18rem' }}>
                  <img src={Bluepot} class="card-img-top carousel__image" alt="dwarf-apple-tree" />
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
              <div className="col-6">
                <div class="card container d-flex justify-content-center" style={{ width: '18rem' }}>
                  <img src={Pinkpot} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="carousel__card-title">Dwarf Banana Tree</h5>
                    <p class="carousel__card-price">$17.00</p>
                    <img className="carousel__ratings" src={Ratings} alt="ratings-icon" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div class="card container d-flex justify-content-center" style={{ width: '18rem' }}>
                  <img src={Greenpot} class="card-img-top carousel__image" alt="dwarf-lemon-tree" />
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

    </div>

        </div>
    );
}

export default Featuredpots;
