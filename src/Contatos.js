import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ReactFileReader from 'react-file-reader';
import insertContact from './setContact'

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'


import './style.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


handleFiles = files => {
   // var reader = new FileReader();
   // reader.onload = function(e) {

   // let splitArray = reader.result.split("\n");
    //let array = [];
  

   //  for(var i= 0 ;i < splitArray.length-1;i++){
      // InsertsResources(splitArray[i].split(";")[0],splitArray[i].split(";")[1])
       //InsertsResources(splitArray[i].split(";")[0],splitArray[i].split(";")[1])
     insertContact()
    // }

         //alert("Assistente Cadastrado")
   
    //}

  //reader.readAsText(files[0]);
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
        </main>
                  
          </>
    );
  }
}

export default Home;
