const bcrypt = require('bcrypt');
const Book = require("./models/book");
const Author = require("./models/author");
const User = require("./models/user");
const resolver = require("./reslovers");
const dataSourceAPI = {
    getBooks: ()=> {
        return Book.find({});
    },
    getAuthors: ()=> {
        return Author.find({});
    },
    getAuthor: (id)=> {
        return Author.findById(id);
    },
    getAuthorBooks: (id) => {
        return Book.find({authorId:id});
    },
    getSpecificBook: (id) => {
        return Book.findById(id);
    },
    addAuthor: (name, age) => {
        let author = new Author({name:name, age:age});
        let success = true;
        let message = "";
        return new Promise((resolve)=> {
            author.save(function(err, ret){
                if(err){
                    success = false;
                    message = err.toString();
                    resolve({
                        success:success,
                        message:message,
                        author:ret
                    })
                }else{
                    message = "successfully added"
                    resolve({
                        success:success,
                        message:message,
                        author:ret
                    })
                }
    
            })
        })
    },
    AddBook: (title, page, genre, authorId)=> {
        let book = new Book({title:title, page:page, genre:genre, authorId:authorId});
        let success = true;
        let message = "";
        return new Promise((resolve)=> {
            book.save(function(err, ret){
                if(err) {
                    success = false;
                    message = err.toString();
                    resolve({
                        success:success,
                        message:message,
                        book:ret
                    });
                }else {
                    message = "successfully added";
                    resolve({
                        success:success,
                        message:message,
                        book:ret
                    });
                }
            });
        })
    },
    Signup: async (username, password) => {
        let token = "";
        token = await bcrypt.hash(username, 10);
        console.log(token);
        r_user = new User({username:username, password:password, token:token});
        return new Promise((resolve)=> {
            r_user.save((err, usr) => {
                if(err){
                    resolve({success:false, token:null, user:null});
                }else {
                    resolve({success:true, token:usr.token, user:usr});
                }
            })
        })
        
    },
    Login: async (username, password) => {
        let user = await User.find({username:username, password:password});
        if(user.length==0){
            return {success:false, token:null, user:null}
        }else {
            return {success:true, token:user[0].token, user:user[0]};
        }
    },
    TokenLogin: async (token) => {
        let user = await User.find({token:token});
        if(user.length==0) {
            return {success:false, token:null, user:null}
        }else {
            return {success:true, token:user[0].token, user:user[0]};
        }
    }
}

module.exports = dataSourceAPI;