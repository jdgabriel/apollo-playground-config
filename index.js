const { ApolloServer, gql } = require("apollo-server");

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books
  }
};

/**
 *  Apollo Server Playground Configuration
 */
const config = {
  projects: {
    play_config: {
      extensions: {
        endpoints: {
          develop: {
            url: "http://localhost:4000",
            headers: {
              Authenticate: "Bearer Token"
            }
          },
          subscription: {
            url: "http://localhost:4000/subscriptions",
            headers: {
              Authenticate: "Bearer subscription_token"
            }
          }
        }
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: {
    path: "/subscriptions"
  },
  playground: {
    workspaceName: "apollo_server",
    config
  },
  context: () => {}
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
