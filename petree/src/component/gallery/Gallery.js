import './gallery.css';
import Userphoto1 from "../../assets/images/moonchi.jpg";
import Userphoto2 from "../../assets/images/tina.png";
import Userphoto3 from "../../assets/images/farah.jpeg";
import Userphoto4 from "../../assets/images/wakti.jpg";

import Add from "../../assets/icons/plus.svg";

const Gallery = () => {
  return (
    <div>
      <div className="gallery__container">
        <div className="gallery__heading">
          <h1 className="gallery__text-style">
            From Petree owners
          </h1>
          <h2 className="gallery__text-sub-style">
            Add yours here!
          </h2>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <img
              src={Userphoto1}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="woman indoor planting"
            />
          </div>
          <div className="col-12 col-md-6">
            <img
              src={Userphoto2}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="woman indoor planting"
            />
          </div>
          <div className="col-12 col-md-6">
            <img
              src={Userphoto3}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>
          <div className="col-12 col-md-6">
            <img
              src={Userphoto4}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
          </div>
        </div>
        <label class="form-label" for="customFile">Add Your Petree Moments</label>
<input type="file" class="form-control" id="customFile" />
        
        <div className="gallery__add-flex mt-2">
        <button type="button" class="btn btn-outline-success">
   <img src={Add} alt="plus-icon" /> Add
</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
