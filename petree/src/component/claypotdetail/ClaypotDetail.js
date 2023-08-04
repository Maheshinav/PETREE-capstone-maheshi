import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ClaypotDetail = () => {
  const { claypot_id } = useParams(); // Get the id from the URL parameters
  const [claypotData, setClaypotData] = useState(null);
  console.log('ID from URL claypot:', claypot_id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/claypots/${claypot_id}`);
        setClaypotData(response.data);
        console.log('Fetched tree data:', response.data);
      } catch (error) {
        console.error('Error fetching tree data:', error);
      }
    };

    fetchData();
  }, [claypot_id]);

  if (!claypotData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
    <div className="d-flex justify-content-center justify-content-md-around flex-md-row  mt-4 mb-4 treedetail__main flex-column ">
      <div className="col-12 col-md-4 d-flex align-items-center justify-content-center mb-4">
        <img src={claypotData.claypot_image} className="rounded col-6 col-md-12 col-md-3" alt="trees" />
      </div>
      <div className="col-12 col-md-6 d-flex flex-column justify-content-md-center  align-items-center align-items-md-start">
        <div className="text-center text-md-left">
          <h3>{claypotData.claypot_name}</h3>
        </div>
        <div className="col-10 text-md-start text-center">
          <p>
            {claypotData.claypot_description}
          </p>
        </div>
        <div className="mb-3">
            <h2>$ {claypotData.claypot_price}</h2>
          
        </div>
        <div>
        <button className="btn col-12 btn-primary treedetail__button" type="button">Select Pot</button>
        </div>
      </div>
    </div>
    <hr class="hr hr-blurry" />
    </div>
    
  );
};

export default ClaypotDetail;
