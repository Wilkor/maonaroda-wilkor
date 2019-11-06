import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ReactFileReader from 'react-file-reader';
import getTickets from './getTickets'
import CloseTickets from './closeTickets'

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'


import './style.css';

class Home extends Component {
constructor(props){

  super(props)

  this.state ={
    apikey:null
  }
}


  
handleLocalStorage (event){

event.preventDefault();
let apiKey = this.state.apikey;

localStorage.setItem('@heavybots:token',apiKey);
alert("Dados gravados com sucesso!")
}
  render() {
    return (
          <>

        <main role="main" class="container">
          <div class="my-3 p-3 bg-white rounded shadow-sm">
              <h4 class="border-bottom border-gray pb-2 mb-0">Configuração</h4>
              <br/>
                <div className="form-group text-grey">      
                <label for="exampleFormControlInput1">Key</label>
                <input type="apikey" className="form-control" 
               onChange = {(event) => this.setState({apikey:event.target.value})}
                 id="exampleFormControlInput1" />
          </div>

              <div class="container-button">
               <button class="btn btn-primary btn" onClick={(event) => this.handleLocalStorage(event)}>Gravar</button> 
          
              </div>

      
            </div>
        </main>
 
          </>
    );
  }
}

export default Home;
