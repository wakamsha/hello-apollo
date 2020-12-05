import { ApolloServer } from 'apollo-server';
import { books } from './data/books';
import { typeDefs } from './typeDefs';

const resolvers = {
  Query: {
    books,
  },
} as const;

// サーバを起動する
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then((conf: { url: string }) => {
  console.info(`🚀 Server ready at ${conf.url}`);
});
