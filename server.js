const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./typeDefs')
const resolvers = require("./resolvers")
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true})
.then(()=> console.log('db conntected'))


// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint

app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress(req => {
      return {
        schema: schema,
        context: {
          value: req.body.something,
        },
        // other options here
      };
    }),
  );
// GraphiQL, a visual editor for queries
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(4000, () => {
  console.log('Go to http://localhost:4000/graphiql to run queries!');
});