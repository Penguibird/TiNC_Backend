const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');

const CrmProvider = require('./src/crmProvider')
const CityProvider = require('./src/cityProvider')
const InterestProvider = require('./src/interestProvider')

// The GraphQL schema
const typeDefs = require('./src/schema')
const resolvers = require('./src/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        crmProvider: new CrmProvider(),
        cityProvider: new CityProvider(),
        interestProvider: new InterestProvider()
    })
})


// Initialize the app
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});