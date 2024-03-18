import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
    
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733329.jpg?size=626&ext=jpg&ga=GA1.1.805283607.1708940798&semt=ais" className="card-img" alt="backgound color" height={"550px"}/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TREADS
          </p>
          </div>
        </div>
      </div>
    </div>
    <Products/>
    </>
  );
};

export default Home;
