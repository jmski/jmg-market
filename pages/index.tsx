import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Market boy Johnny</h2>
        <p>Super chill</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
