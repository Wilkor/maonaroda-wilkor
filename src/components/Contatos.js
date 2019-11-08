import React, { Component } from 'react';
import insertContact from '../controllers/setContact'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'



import '../style.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


handleFiles = files => {

     if(!localStorage.getItem('@heavybots:token')){

        NotificationManager.info('No menu configurações, adicione uma ApiKey para realizar esta operação', 'Informação!');

       return false;

     }

     insertContact()
    NotificationManager.success('Operação realizada com sucesso!', 'Concluido!');
}
  render() {
    return (
          <>
        <main role="main" class="container">
          <div class="my-3 p-3 bg-white rounded shadow-sm">
              <h4 class="border-bottom border-gray pb-2 mb-0">Cadastro de Contatos</h4>
              <br/>


                          <button class="btn btn-primary btn"  onClick={this.handleFiles}  >Carregar Contatos</button>

        </div>
          <NotificationContainer/>
        </main>

          </>
    );
  }
}

export default Home;
