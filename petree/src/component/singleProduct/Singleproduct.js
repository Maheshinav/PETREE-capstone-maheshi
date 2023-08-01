import React from 'react';
import './singleproduct.css';
import Lemontree from "../../assets/images/dwarf lemon tree.jpeg";

const Singleproduct = () => {
  return (
    <div>
    <div className="container">
      <h1 className="mt-4 mb-5 page-title">Trees</h1>
      <hr class="hr hr-blurry" />
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-12 col-md-8 col-lg-6">
          <div className="custom-card pb-2">
            <div className="d-flex justify-content-center align-items-center">
              <h4 className="mt-4 mb-5 item__name"><strong>Dwarf Lemon Tree</strong></h4>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '350px' }}>
              <img className="card-img" src={Lemontree} alt="lemon-trr" style={{ maxWidth: '350px', maxHeight: '350px', objectFit: 'contain' }} />
            </div>
            
            <div className="custom-card-body">
              <div className="d-flex flex-column">
                <div className="row pt-3">
                  <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-between px-3">
                    <h6 className="mb-2  item__card-sub">Age:3years </h6>
                    <h6 className="mb-2  item__card-sub">Scientific name: Malus Domestica</h6>
                  </div>
                  <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-between">
                    <h6 className="mb-2  item__card-sub">Height: 4feet</h6>
                    <h6 className="mb-2  item__card-sub">Variety: Red delicious</h6>
                  </div>
                </div>
              </div>
              <p className="custom-card-text">
              A charming dwarf Red Delicious variety bearing full-sized, sweet, and crisp apples. Ideal for small gardens, patios, or as an eye-catching centerpiece. Early fruiting and beautiful spring blossoms make it a delightful addition to any space.
              </p>
             
              <div className="buy d-flex justify-content-between align-items-center">
                <div className="price text-success">
                  <h5 className="mt-4">$15</h5>
                </div>
                <a href="#" className="btn item__button-color item__button-text mt-3">
                   Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="hr hr-blurry" />
    </div>

  );
};

export default Singleproduct;
