import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utitlys/addToDb';
import Book from '../Book/Book';

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');
  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const storeBookData = getStoredBook();
    const convertedStoredBook = storeBookData.map(id => parseInt(id));
    const myReadList = data.filter(book =>
      convertedStoredBook.includes(book.bookId)
    );

    setReadList(myReadList);
  }, []);

  const handelSort = type => {
    setSort(type);
    if (type === 'pages') {
      const sortedByPage = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByPage);
    }
    if (type === 'rating') {
      const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRating);
    }
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex justify-center my-10">
        <details className="dropdown">
          <summary className="btn m-1">Short By :{sort ? sort : ''}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handelSort('Pages')}>Pages</a>
            </li>
            <li>
              <a onClick={() => handelSort('Rating')}>Rating</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>
            <span className="text-xl font-bold">
              Read Book List {readList.length}
            </span>
          </Tab>
          <Tab>
            <span className="text-xl font-bold">My Wish List</span>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read</h2>
          <div className="grid grid-cols-4 gap-5">
            {readList.map(b => (
              <Book key={b.bookId} singleBook={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
