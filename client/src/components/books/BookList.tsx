import React, { ReactElement } from 'react'
import BookItem from './BookItem';
import { useQuery, gql } from '@apollo/client';
import { AuthorType, BookType } from '../../redux/types';
interface Props {
  
}



export default function BookList({}: Props): ReactElement {
  const booklistQuery = gql`
    query getBookQuery {
      Books{
        title
        page
        genre
        authorId
        author{
          name
          age
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(booklistQuery);
  const onClick = (authorId:string) => {
    
  }
  if (loading) {
    return (
      <div>
        Loading books....
      </div>
    ) 
  } else if(error) {
    return (
      <div>
        Error occured...
      </div>
    ) 
  } else {
    const books:[BookType] = data.Books;
    return (
      <div className="booklist_container">
        {books && books.map((book:BookType, index:number) => {
          return (<BookItem page={book.page} genre={book.genre} title={book.title} authorId={book.authorId} author={book.author} key={index} onClick={(onClick)}/>)
        })}
      </div>
    )  
  }
}
