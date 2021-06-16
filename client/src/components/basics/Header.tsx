import React, { ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
interface Props {
  
}

export default function Header({ }: Props): ReactElement {
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  return (
    <header className="c_header">
      <a className="logo_text">Book Management System</a>
      {isLogged&&<a>Logout</a>}
      {!isLogged&&<a>Signup</a>}
    </header>
  )
}
