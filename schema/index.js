const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLFloat
} = require("graphql");

const productType = new GraphQLObjectType({
    name: "Product",
    field: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        filter: { type: GraphQLString },
        price: { type: GraphQLFloat },
    },
});
    
const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return "world";
      },
    },
  },
  products: {
      type: GraphQLList(productType),
      
  }
});
const schema = new GraphQLSchema({
  query: rootQuery,
});

module.exports = schema;
