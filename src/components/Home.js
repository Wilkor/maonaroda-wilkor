import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import InsertsResources from '../controllers/setResources';
import deleteResources from '../controllers/deleteResources';
import getResources from '../controllers/getResources';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';


import '../style.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      recursos:[]
    };
  }



 handleGetResources() {

      if(!localStorage.getItem('@heavybots:token')){

       NotificationManager.success('No menu configurações, adicione uma ApiKey para realizar esta operação!', 'Informação!');

       return false;

     }

  let result  =  getResources()

   result.then( data =>{



  let x =0
     data.forEach(element =>{

        (function(index) {

                  setTimeout(function() {
                  deleteResources(element)
                  }, x*index);

                  })(70);
              x++;
     })
         alert("Regras Deletadas")
   }).catch(error =>{

     console.log(error)
   })

}




 handleFiles = files => {
    var reader = new FileReader();
    reader.onload =  async function(e) {



    var splitArray = reader.result.split("\n");

   console.log(splitArray);
// eslint-disable-next-line
    var array = [];

     for(let x = 0, ln = splitArray.length; x < ln; x++){

          (function(index) {

          setTimeout(function() {

            InsertsResources(splitArray[x].split(";")[0],splitArray[x].split(";")[1])

          },count*index);

          })(70);
       count++;

     }

        alert("Recursos Cadastrados")

    }


  reader.readAsText(files[0]);
}
  render() {
    return (
          <>

        <main role="main" class="container">
          <div class="my-3 p-3 bg-white rounded shadow-sm">
              <h4 class="border-bottom border-gray pb-2 mb-0">Cadastro de Resources</h4>
              <br/>


            <div class="container-button">
                        <button class="btn btn-primary btn" onClick={this.handleGetResources}>Deletar Resources</button>
            <ReactFileReader handleFiles={this.handleFiles}>
                        <button class="btn btn-primary btn" >Carregar Resources</button>
            </ReactFileReader>
                        </div>


            </div>
                      <NotificationContainer/>
        </main>

          </>
    );
  }
}

export default Home;
