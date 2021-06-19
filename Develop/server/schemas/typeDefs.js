const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book{
  //  bookId: ID(returns value from the google's API)
    author: [String]
    describtion: String
    title: String
    // image: img!
    link: Sring
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    // saveBook(author: [String], describtion: String, title: String, bookId: ID, image: img!, link:String): User
    removeBook(bookId: ID!): User
  }

`;

module.exports = typeDefs;
