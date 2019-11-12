import React from "react";
import Home from '../components/Home';
import Rules from '../components/Rules';
import Cadastro from '../components/CadastroAssistente';
import Contatos from '../components/Contatos';
import Tickets from '../components/CloseTicket';
import Config from '../components/Config';
import Clone from '../components/CloneBots';
import BroadCast from '../components/BroadCastList'
import Login from '../components/login'
import getToken from '../services/getToken';
import MenuDecisao from '../components/MenuDecisao'
import Logout from '../components/Logout'
import Signup from '../components/Signup'

import {BrowserRouter, Route, Switch, Redirect  } from "react-router-dom";



const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route
    {...rest}
    render={props =>
    
      getToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />



);

const Routes = (props) => (

   <>

  <BrowserRouter>
    <MenuDecisao  getLogin={getToken}/>
    <Switch>
      <Route exact path="/login"  render={()=> <Login redirect={Redirect} getLogin={getToken} setNewState={props.setNewState} user={props.user}/>} />
        <Route exact path="/" render={()=> <Login redirect={Redirect} getLogin={getToken} setNewState={props.setNewState} user={props.user}/>}/>
        <PrivateRoute exact path="/resources" component={Home} />
        <PrivateRoute exact path="/rules" component={Rules} />
        <PrivateRoute exact path="/cadastro" component={Cadastro} />
        <PrivateRoute exact path="/contact" component={Contatos} />
        <PrivateRoute exact path="/tickets" component={Tickets} />
        <PrivateRoute exact path="/config" component={Config} />
        <PrivateRoute exact path="/clone" component={Clone} />
        <PrivateRoute exact path="/broadcast" component={BroadCast} />
        <Route path="/logout" render={()=> <Logout setNewState={props.setNewState} user={props.user}/>} />
        <Route path="/signup" render={()=> <Signup redirect={Redirect} getLogin={getToken} setNewState={props.setNewState} user={props.user}/>}  />
    </Switch>

  </BrowserRouter>
  </>

);

export default Routes;
