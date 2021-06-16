import React, { ReactElement } from 'react'
import BookList from './BookList';
import BookInfo from './BookInfo';
interface Props {
  
}

export default function BooksContainer({}: Props): ReactElement {
  return (
    <div className="books_page_container">
      <BookList />     
      <BookInfo />     
    </div>
  )
}
