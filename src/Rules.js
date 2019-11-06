import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ReactFileReader from 'react-file-reader';
import setRules from './setRules'
import getRules from './getRules'
import deleteRules from './deleteRules'

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


  
 handleGetRules() {
  let result  =  getRules()

   result.then( data =>{

     data.forEach(element =>{

      deleteRules(element.id)   
          
     })

         alert("Regras Deletadas")

   }).catch(error =>{

     console.log(error)
   })
   
}



handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {

    let splitArray = reader.result.split("\n");
    let array = [];
  

     for(var i= 0 ;i < splitArray.length-1;i++){
        setRules(splitArray[i].split(";")[0].trim())

       //console.log(splitArray[i].split(";")[0].trim())

     }

     alert("Regras Cadastradas")
   
    }

  reader.readAsText(files[0]);
}
  render() {
    return (
          <>

        <main role="main" class="container">
          <div class="my-3 p-3 bg-white rounded shadow-sm">
              <h4 class="border-bottom border-gray pb-2 mb-0">Cadastro de Rules</h4>
              <br/>

              <ReactFileReader handleFiles={this.handleFiles}>

              <div class="container-button">
               <button 
                          class="btn btn-primary btn" 
                          onClick={this.handleGetRules}>Deletar Regras</button> 
                          <button class="btn btn-primary btn" >Carregar Regras</button>


                        </div>
                        </ReactFileReader>

                       
            
        </div>
        </main>

      

         
                         
                       

                       
            
     

                  
          </>
    );
  }
}

export default Home;
