import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto">
      <div className="banner flex items-center justify-between px-25">
        <div className=" ">
          <h1 className="text-4xl font-bold mb-4">
            Explore endless stories, ignite your imagination, <br /> and find
            the perfect book for <br />
            every moment
          </h1>
          <button className="btn btn-primary text-xl">Explore More</button>
        </div>
        <div>
          <img
            className="max-w-md rounded-lg shadow-2xl"
            src="https://i.ibb.co.com/rRPFN1rX/books.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
