import React from "react";
//import { isAuthenticated } from "./auth";
import Navbar from './Navbar';
import Home from './Home';
import Rules from './Rules';
import Cadastro from './CadastroAssistente';
import Contatos from './Contatos';
import Tickets from './CloseTicket';
import Config from './Config';
import Clone from './CloneBots';
import BroadCast from './BroadCastList'

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Routes = (props) => (

   <>
  
  <BrowserRouter>
    <Navbar />  
     
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resources" component={Home} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/contact" component={Contatos} />
        <Route exact path="/tickets" component={Tickets} />
         <Route exact path="/config" component={Config} />
         <Route exact path="/clone" component={Clone} />
         <Route exact path="/broadcast" component={BroadCast} />
    </Switch>

  </BrowserRouter>
  </>
   
);

export default Routes;
