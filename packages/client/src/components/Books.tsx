import React from 'react';
import { useFetchBooksQuery } from '../graphql';

export const Books = () => {
  const { loading, error, data } = useFetchBooksQuery();

  if (loading) return <p>Loading... ( ˘ω˘)</p>;

  if (error) return <p>Error 🥺</p>;

  return data ? (
    <>
      {data.books.map((data, index: number) => (
        <article key={index}>
          <h3>book {index + 1}</h3>
          <p>title: {data?.title}</p>
          <p>author: {data?.author}</p>
        </article>
      ))}
    </>
  ) : null;
};
