import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
  // const [allBooks, setAllBooks] = useState([]);

  // ----------
  // useEffect(() => {
  //   fetch('books.json')
  //     .then(res => res.json())
  //     .then(data => setAllBooks(data));
  // }, []);
  // console.log(allBooks);

  // ---------
  // const bookPromise = fetch('/books.json').then(res => res.json());
  return (
    <div className="w-11/12 mx-auto">
      <p>hey Here im</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Suspense fallback={<span>loading</span>}>
          {data.map(singleBook => (
            <Book singleBook={singleBook} key={singleBook.bookId}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
