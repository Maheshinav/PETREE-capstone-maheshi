import React, { useState, useEffect } from 'react';
import './bestsellingpots.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Bestsellingpots = () => {
  const [claypotData, setClaypotData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the /trees endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/claypots');
        setClaypotData(response.data);
      } catch (error) {
        console.error('Error fetching tree data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to group the treesData into chunks of 3
  const chunkTreesData = (data, size) => {
    const result = [];
    for (let i = 0; i < data.length; i += size) {
      result.push(data.slice(i, i + size));
    }
    return result;
  };

  const groupedTreesData = chunkTreesData(claypotData, 3);

  return (
    <div>
      <div className='bestsellingpots__heading-set d-flex justify-content-center'>
        <h1 className='bestsellingpots__heading'>Clay Pots</h1>
        </div> 
      {groupedTreesData.map((group, index) => (
        <div className="card-deck d-flex justify-content-around py-3 flex-wrap " key={index}>
          {group.map((claypot) => (
            <div className="bestsellingpots__card-height card col-11 col-md-3 mb-3 " key={claypot.claypot_id}>
              <img
                className="card-img-top bestsellingpots__image"
                src={claypot.claypot_image}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title bestsellingpots__card">{claypot.claypot_name}</h5>
                
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Bestsellingpots;
