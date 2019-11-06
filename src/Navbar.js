import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Menu = () =>{



   return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="#"><img src="https://raw.githubusercontent.com/Wilkor/Chat-bot-test/master/14134081Untitled-3-512.png" width="50"></img></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/clone">Clonar Bots <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/config">Configurações</Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link" to="/tickets">Fechar Tickets</Link>
          </li>
             <li className="nav-item">
            <Link className="nav-link" to="/broadcast">Status BroadCast </Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cadastros
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/resources">Recuros</Link>
              <Link className="dropdown-item" to="/rules">Regras</Link>
               <Link className="dropdown-item" to="/cadastro">Assistentes</Link>
               <Link className="dropdown-item" to="/contact">Contatos</Link>
              <div className="dropdown-divider"></div>
              
            </div>
          </li>
         
        </ul>
      </div>
    </nav>
   
   )
 
}

export default Menu;