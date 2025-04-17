import React from 'react';
import bookImage from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className="flex">
      <div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <button className="btn btn-primary">Expolr</button>
      </div>
      <div>
        <img className="w-6/12" src={bookImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
