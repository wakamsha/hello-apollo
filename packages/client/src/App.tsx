import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { useRef } from 'react';
import { Books } from './components/Books';
import { BooksLazy } from './components/BooksLazy';

export const App = () => {
  const client = useRef(new ApolloClient({ uri: 'http://localhost:4000', cache: new InMemoryCache() }));

  return (
    <ApolloProvider client={client.current}>
      <>
        <h2>
          My first Apollo app
          <span role="img" aria-label="Rocket">
            🚀
          </span>
        </h2>
        <Books />
        <hr />
        <BooksLazy />
      </>
    </ApolloProvider>
  );
};
