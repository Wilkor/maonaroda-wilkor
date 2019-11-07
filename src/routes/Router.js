import React from "react";
//import { isAuthenticated } from "./auth";
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Rules from '../components/Rules';
import Cadastro from '../components/CadastroAssistente';
import Contatos from '../components/Contatos';
import Tickets from '../components/CloseTicket';
import Config from '../components/Config';
import Clone from '../components/CloneBots';
import BroadCast from '../components/BroadCastList'

import { BrowserRouter, Route, Switch } from "react-router-dom";

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
