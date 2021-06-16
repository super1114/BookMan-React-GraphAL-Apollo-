import React from 'react';
import { ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery } from '@apollo/client';
import './index.css';
import Header from './components/basics/Header';
//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './components/homepage'
import BooksContainer from './components/books/BooksContainer';
import RequireAuth from './components/login/auth'
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000"
  })
  return (
    <ApolloProvider client={client}>
      <RequireAuth>
        <div className="App">
          <Header />              
            <BooksContainer />
        </div>
      </RequireAuth>
    </ApolloProvider>
  );
}

export default App;
