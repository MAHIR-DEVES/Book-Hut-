import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDb } from '../../Utitlys/addToDb';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === bookId);
  const { image, review } = singleBook;
  // console.log(data);

  const handelMakAssReed = id => {
    // Store with id
    // where to store
    // array or collation
    // if book already exist the show a alert
    // if book not exist then push in the collation or array

    MySwal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
    });
    toast('Wow so easy!');

    addToStoreDb(id);
  };

  return (
    <div className="flex gap-6 w-11/12 mx-auto my-10">
      <img className="w-48" src={image} alt="" />

      <div>
        <p className="my-5">{review}</p>
        <button
          onClick={() => handelMakAssReed(id)}
          className="btn btn-accent mr-2"
        >
          Mark As Reed
        </button>

        <button className="btn btn-info">Add To WishList</button>
        <ToastContainer />
        {/* <button>Back</button> */}
      </div>
    </div>
  );
};

export default BookDetails;
