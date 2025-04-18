import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch('books.json'),
        path: '/',
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: 'readList',
        loader: () => fetch('/books.json'),
        Component: ReadList,
      },
      {
        path: 'bookDetails/:id',
        loader: () => fetch('/books.json'),
        Component: BookDetails,
      },
    ],
  },
]);
