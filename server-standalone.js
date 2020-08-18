const {ApolloServer} = require('apollo-server')
const typeDefs = require('./typeDefs')
const resolvers = require("./resolvers")
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true})
.then(()=> console.log('db conntected'))

const server = new ApolloServer({
    typeDefs,
    resolvers

})

server.listen().then(({url})=> console.log('server is listening on ', url))


