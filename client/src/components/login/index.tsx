import React, { ReactElement } from 'react'
import { useQuery, gql, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginSuccess } from "../../redux/authSlice"
import { useHistory } from 'react-router-dom'
interface Props {
  
}

export default function Index({ }: Props): ReactElement {
  const loginMutation = gql`
    mutation LoginMutation($username:String!, $password:String!){
      Login(username:$username, password:$password){
        success
        token
        user{
          username
        }
      }
    }
  `;
  const dispatch = useAppDispatch()
  const history = useHistory()
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const onChange = (target:any) => {
    if (target.type == "text") {
      setUserName(target.value)
    } else {
      setPassword(target.value)
    }
  }
  const credential = {
    username: username,
    password: password
  };
  const [login] = useMutation(loginMutation, {
    variables: {
      username: username,
      password:password
    },
    onCompleted: ({ Login }) => {
      if (Login.success) {
        localStorage.setItem("token", Login.token);
        dispatch(loginSuccess(Login.user));
        history.push("/home")
      }
    }
  });
  
  const OnSubmit = (e: any) => {
    e.preventDefault();
    login();
  }
  return (
    <form onSubmit={(e) => OnSubmit(e)} className="c_form">
      <div className="loginHeader">User Login</div>
      <div className="form-group">
        <input type="text" value={username} onChange={(e)=>onChange(e.target)} placeholder="Username"/>
      </div>
      <div className="form-group">
        <input type="password" value={password} onChange={(e)=>onChange(e.target)} placeholder="Password" />
      </div>
      <div className="form-group btn-group" >
        <button type="submit" className="c_button"> Login </button>
      </div>
    </form>
  )
}
