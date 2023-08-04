import React, { useState, useEffect } from 'react';
import './clayPots.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from "react-router-dom";

const ClayPots = () => {
  const [claypotData, setClaypotData] = useState([]);

  useEffect(() => {

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
      <div className='claypot__heading-set d-flex justify-content-center'>
        <h1 className='claypot__heading'>Clay Pots</h1>
      </div>
      {groupedTreesData.map((group, index) => (
        <div className="card-deck d-flex justify-content-around py-3 flex-wrap" key={index}>
          {group.map((claypot) => (
            <div className="card col-11 col-md-3 mb-3" key={claypot.claypot_id}>
              <img
                className="card-img-top clatpot__image"
                src={claypot.claypot_image}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title claypot__card">{claypot.claypot_name}</h5>
                <Link
                  to={`/claypotDetailpage/${claypot.claypot_id}`}
                  className="btn btn-primary tree__button"
                >
                  Select Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ClayPots;
