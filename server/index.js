const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./schema")
const resolvers = require("./reslovers")
const dataSourceAPI = require("./api");
const mongoose = require("mongoose");
console.log("resolvers");
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: ()=> {
        return {api: dataSourceAPI}
    }
});
mongoose.connect("mongodb://localhost:27017/gql_test");
mongoose.connection.once("open", ()=>{
    console.log("connected to database");
})


server.listen().then(()=>{
    console.log("apollo server is running on port 4000");
})
