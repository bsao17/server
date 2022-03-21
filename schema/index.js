const graphql = require("graphql");
const product = require ("../models")
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLFloat,
} = graphql;

const productType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    filter: { type: GraphQLString },
    price: { type: GraphQLFloat },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return "Hi graphql";
      },
    },
    products: {
      type: new GraphQLList(productType),
      resolve(parent, args) {
        return product.find({});
      },
    },
    products: {
      type: new GraphQLList(productType),
      args: {category: {type: GraphQLString}},
      resolve(parent, args) {
        return product.find({category: args.category});
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;
