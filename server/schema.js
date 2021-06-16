const { gql } = require("apollo-server");
const typeDef = gql`
    type Query {
        Books: [Book!]!
        Authors: [Author!]!
        Book(id:ID!): Book
    }
    type Book {
        id: ID!
        title: String!
        page: Int!
        genre: String!
        authorId: String!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        age: Int!
        books: [Book]
    }
    type User {
        id: ID!
        username: String!
        password: String,
        token: String
    }
    type Mutation {
        AddBook(title:String!,page:Int!,genre:String!,authorId:String!) : AddBookResponse!
        AddAuthor(name:String!, age:Int!): AddAuthorResponse!
        SignUp(username:String!, password:String!): AuthResponse
        Login(username:String!, password:String!): AuthResponse,
        LoginToken(token:String!): AuthResponse
    }
    type AddBookResponse {
        success:Boolean!
        message:String
        book:Book
    }
    type AddAuthorResponse {
        success:Boolean!
        message:String
        author:Author
    }
    type AuthResponse {
        success:Boolean!
        token:String,
        user:User
    }
`;

module.exports = typeDef;