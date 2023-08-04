import React, { useState, useEffect } from 'react';
import './treeDetail.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './treeDetail.css';

const TreeDetail = () => {
  const { tree_id } = useParams(); // Get the id from the URL parameters
  const [treeData, setTreeData] = useState(null);
  console.log('ID from URL parameters:', tree_id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/trees/${tree_id}`);
        setTreeData(response.data);
        console.log('Fetched tree data:', response.data);
      } catch (error) {
        console.error('Error fetching tree data:', error);
      }
    };

    fetchData();
  }, [tree_id]);

  if (!treeData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
    <div className="d-flex justify-content-center justify-content-md-around flex-md-row  mt-4 mb-4 treedetail__main flex-column ">
      <div className="col-12 col-md-4 d-flex align-items-center justify-content-center mb-4">
        <img src={treeData.tree_image} className="rounded col-6 col-md-12 col-md-3" alt="trees" />
      </div>
      <div className="col-12 col-md-6 d-flex flex-column justify-content-md-center  align-items-center align-items-md-start">
        <div className="text-center text-md-left">
          <h3>{treeData.tree_name}</h3>
          <p>({treeData.scientific_name})</p>
        </div>
        <div className="col-10 text-md-start text-center">
          <p>
            {treeData.tree_description}
          </p>
        </div>
        <div className="mb-3">
            <h2>$ {treeData.tree_price}</h2>
          
        </div>
        <div>
        <button className="btn col-12 btn-primary treedetail__button" type="button">Pet Now</button>
        </div>
      </div>
    </div>
    <hr class="hr hr-blurry" />
    </div>
    
  );
};

export default TreeDetail;
