# Apollo Playground Config

Apollo Server Playground Configuration

```javascript
const config = {
  projects: {
    app: {
      // Project Name
      // Load shcemas - not require
      schemaPath: "src/schema.graphql",
      // Load the includes files - not required
      includes: ["queries/{booking,queries}.graphql"],
      extensions: {
        // Required
        endpoints: {
          dev: {
            // Module in develop
            // You can get external schemas with external urls
            url: "https://localhost:4000/",
            // Headers develop
            headers: {
              Authorization: "Bearer bearer_token_provider"
            }
          }
        }
      }
    }
  }
};

const server = new ApolloServer({
  ...
  playground: {
    config
  },
  ...
});
```
