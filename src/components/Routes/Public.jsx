import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from "../Layouts/Login"

const Public = ({ component: Component, ...rest }) => {

  const userLogged = true

  if ( userLogged && Component===Login) {
    return <Redirect to="/login" />
  }
  return <Route {...rest} component={Component} />
}

export default Public
