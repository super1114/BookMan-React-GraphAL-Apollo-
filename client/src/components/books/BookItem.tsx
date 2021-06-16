import React, { ReactElement } from 'react'
import { AuthorType } from '../../redux/types';
interface Props {
  title: string,
  page: number,
  genre: string
  authorId: string,
  author: AuthorType,
  onClick: any
}

export default function BookItem({ title, page, genre, authorId, author, onClick }: Props): ReactElement {
  console.log(authorId)
  return (
    <div className="c_bookitem" onClick={()=>onClick(authorId)}>
      <div className="c_book_title">{title}</div>
      <div className="c_book_genre">{genre}</div>
      <div className="c_book_page">{page}</div>
      <div className="c_book_author">{author.name}</div>
    </div>
  )
}
