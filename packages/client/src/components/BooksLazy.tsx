import React from 'react';
import { useFetchBooksLazyQuery } from '../graphql';

export const BooksLazy = () => {
  const [loadBooks, { called, loading, error, data }] = useFetchBooksLazyQuery();

  if (called && loading) return <p>Loading... ( ˘ω˘)</p>;

  if (error) return <p>Error 🥺</p>;

  return (
    <>
      <button onClick={() => loadBooks()}>Fetch!</button>
      {data
        ? data.books.map((book, index) => (
            <article key={book?.title}>
              <h3>book {index + 1}</h3>
              <p>title: {book?.title}</p>
              <p>author: {book?.author}</p>
            </article>
          ))
        : null}
    </>
  );
};
