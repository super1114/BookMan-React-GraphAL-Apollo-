
const resolver = {
    Query: {
        Books: (_, __, {dataSources }) => {
            return dataSources.api.getBooks();
        },
        Authors: (_, __, {dataSources}) => {
            return dataSources.api.getAuthors();
        },
        Book: (_, {id}, { dataSources }) =>{
            return dataSources.api.getSpecificBook(id);
        }
    },
    Book: {
        author: ({authorId}, __, {dataSources} ) => {
            return dataSources.api.getAuthor(authorId);
        }
    },
    Author: {
        books: ({id}, __, {dataSources}) => {
            return dataSources.api.getAuthorBooks(id);
        }
    },
    Mutation: {
        AddAuthor:(_,{name, age}, {dataSources}) => {
            return dataSources.api.addAuthor(name, age);
        },
        AddBook: (_, {title, page, genre, authorId}, {dataSources}) => {
            return dataSources.api.AddBook(title, page, genre, authorId);
        },
        SignUp: (_, {username, password}, {dataSources}) => {
            return dataSources.api.Signup(username, password);
        },
        Login:(_, {username, password}, {dataSources}) => {
            return dataSources.api.Login(username, password);
        },
        LoginToken:(_, {token}, {dataSources}) => {
            return dataSources.api.TokenLogin(token);
        }
    }
}

module.exports = resolver;