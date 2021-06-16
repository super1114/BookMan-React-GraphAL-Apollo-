import React, { ReactElement } from 'react'
import Login from '../login'
import Header from '../basics/Header';
import { useQuery, gql, useMutation } from '@apollo/client';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loginSuccess } from '../../redux/authSlice'
interface Props {
  children:any
}

export default function Auth({children}: Props): ReactElement {
  const loginWithTokenGQL = gql`
    mutation LoginToken($token: String!){
      LoginToken(token:$token){
        success
        user{
          username
        }
      }
    }
  `;
  const [ tokenLoginFunc ] = useMutation(loginWithTokenGQL, {
    variables:{
      token: localStorage.getItem("token")
    },
    onCompleted: ({ LoginToken }) => {
      if (LoginToken.success) {
        dispatch(loginSuccess(LoginToken.user));
      } else {
        localStorage.removeItem("token")
      }
    }
  })
  const dispatch = useAppDispatch()
  const token = useAppSelector(state => state.auth.token);
  const userInfo = useAppSelector(state => state.auth.user);
  const isLogged = useAppSelector(state => state.auth.isLogged);
  const getToken = () => {
    return localStorage.getItem("token");
  }
  const setToken = (m_token:any) => {
    localStorage.setItem("token", m_token);
  }
  if (!getToken()) {
    return (<div>
      <Header />
      <Login />
    </div>)
  } else {
    if (isLogged == false || Object.keys(userInfo).length == 0) {
      tokenLoginFunc();
    }
    return (
      <div>{children}</div>
    )
  }
  
}
