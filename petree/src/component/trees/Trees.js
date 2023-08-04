import React, { useState, useEffect } from "react";
import "./trees.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Trees = () => {
  const [treesData, setTreesData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/trees");
        setTreesData(response.data);
      } catch (error) {
        console.error("Error fetching tree data:", error);
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

  const groupedTreesData = chunkTreesData(treesData, 3);

  return (
    <div>
      <div className="tree__heading-set d-flex justify-content-center">
        <h1 className="tree__heading">Tree Pets</h1>
      </div>
      {groupedTreesData.map((group, index) => (
        <div
          className="card-deck d-flex justify-content-around py-3 flex-wrap"
          key={index}
        >
          {group.map((tree) => (
            <div className="card col-11 col-md-3 mb-3" key={tree.tree_id}>
              <img
                className="card-img-top tree__image"
                src={tree.tree_image}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title tree__card">{tree.tree_name}</h5>

                <Link
                  to={`/singleproductpage/${tree.tree_id}`}
                  className="btn btn-primary tree__button"
                >
                  Pet now
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Trees;

