import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
  // console.log(data);

  const {
    author,
    bookName,
    image,
    category,
    rating,
    yearOfPublishing,
    tags,
    publisher,
    bookId,
  } = singleBook;

  return (
    <Link to={`bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-2xl ">
        <figure className="p-4 bg-gray-100 m-4 rounded-xl">
          <img className="h-48" src={image} alt="Book" />
        </figure>
        <div className="card-body">
          <div className="flex gap-4 ">
            {tags.map(tag => (
              <div>
                <p>{tag}</p>
              </div>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}

            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <h2 className="card-title"> Publisher: {publisher}</h2>
          <h2>{author}</h2>

          <div className="border-t-1 border-dashed py-2 mt-2"></div>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline ">
              <div className="flex items-center gap-2">
                {rating} <FaStarHalfAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
