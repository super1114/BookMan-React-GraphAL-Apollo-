export interface AuthorType {
  name: string,
  age:number
}
export interface BookType {
  title: string,
  page: number,
  genre: string,
  author: AuthorType,
  authorId:string
}