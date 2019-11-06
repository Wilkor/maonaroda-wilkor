import React, { Component } from 'react';
import { render } from 'react-dom';
import api from './getAndSettingConfig'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'


import './style.css';

class Home extends Component {
constructor(props){

  super(props)

  this.state ={
    keyOrigem:null,
    keyDestino:null
  }
}

 guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
  
handleGetOrigin = async (event) =>{
event.preventDefault();
document.getElementById("modal").click()
if(!this.state.keyOrigem && !this.state.keyOrigem){

  alert("Faltam dados. Por favor, verifique as Keys origem e destino")
  return false
}


let apiKeyOrigem = this.state.keyOrigem;


try {

     const response =  await api.post('/commands',{
          "id":this.guid(),
          "method": "get",
          "uri": "/buckets/blip_portal:builder_working_configuration?$take=1000"
          },{headers: {'Content-Type': 'application/json','Authorization':apiKeyOrigem}});

    } catch (err) {
      
     return  err.data.error 
    }

     if(response.status==200){
      //console.log(response.status)
       this.handleSetPublished(response.data.resource)

     }
}



 handleSetPublished  = async (resource)=>{

   let apiKeyDestino = this.state.keyDestino

try {
     const response =  await api.post('/commands',{

     "id":this.guid(),
     "method": "set",
     resource,
     "type": "application/json",
     "uri": "/buckets/blip_portal%3Abuilder_published_configuration"
     },{headers: {'Content-Type': 'application/json','Authorization':apiKeyDestino}});

    } catch (err) {
      
     return  err.data.error 
    }
    
    if(this.response.status==200){
    this.handleSetWorkingConfiguration(resource)
    }

 }





 handleSetWorkingConfiguration  = async (resource) =>{

    let apiKeyDestino = this.state.keyDestino

try {
     const response =  await api.post('/commands',{

     "id":this.guid(),
     "method": "set",
     resource,
     "type": "application/json",
     "uri": "/buckets/blip_portal%3Abuilder_working_configuration"
     },{headers: {'Content-Type': 'application/json','Authorization':apiKeyDestino}});

    } catch (err) {
      
     return  err.data.error 
    }
         if(response.status==200){
        this.handleGetWorkFlow()
         }
 }


  handleGetWorkFlow =  async ()=>{

    let apiKeyOrigem = this.state.keyOrigem

try {
     const response =  await api.post('/commands',{

     "id":this.guid(),
     "method": "get",
     "uri": "/buckets/blip_portal:builder_working_flow?$take=100"
     },{headers: {'Content-Type': 'application/json','Authorization':apiKeyOrigem}});

    } catch (err) {
      
     return  err.data.error 
    }
         if(response.status==200){
 
              this.handleSetPublishedFlow(response.data.resource)
         }
 }

    handleSetPublishedFlow = async(resource)=>{

    let apiKeyDestino = this.state.keyDestino

try {
     const response =  await api.post('/commands',{

     "id":"61d82a14-adf0-4ddd-aeb1-73736eca083e",
     "method": "set",
      resource,
      "type": "application/json", 
     "uri": "/buckets/blip_portal%3Abuilder_working_flow"
     },{headers: {'Content-Type': 'application/json','Authorization':apiKeyDestino}});

    } catch (err) {
      
     return  err.data.error 
    }
         if(response.status==200){
       this.handleGetWorkFlowPublished(resource)
         }
 }


 handleGetWorkFlowPublished = async(resource)=>{

   
    let apiKeyDestino = this.state.keyDestino

try {
     const response =  await api.post('/commands',{

     "id":this.guid(),
     "method": "set",
     resource,
    "type": "application/json",
     "uri": "/buckets/blip_portal%3Abuilder_published_flow"
     },{headers: {'Content-Type': 'application/json','Authorization':apiKeyDestino}});

    } catch (err) {
      
     return  err.data.error 
    }
         if(response.status==200){
        this.handleGetGlobais();
         }
 }



 handleGetGlobais =  async ()=>{

   
    let apiKeyOrigem = this.state.keyOrigem

try {
     const response =  await api.post('/commands',{

     "id":this.guid(),
     "method": "get",
     "uri": "/buckets/blip_portal:builder_working_global_actions?$take=100"
     },{headers: {'Content-Type': 'application/json','Authorization':apiKeyOrigem}});

    } catch (err) {
      
     return  err.data.error 
    }
         if(response.status==200){
          this.handleGetGlobaisPublished(response.data.resource)
         }
 }


 


  handleGetGlobaisPublished = async(resource)=>{

   
    let apiKeyDestino = this.state.keyDestino

try {
     const response =  await api.post('/commands',{

     "id":this.guid(),
     "method": "set",
     resource,
    "type": "application/json",
     "uri": "/buckets/blip_portal%3Abuilder_published_global_actions"
     },{headers: {'Content-Type': 'application/json','Authorization':apiKeyDestino}});

    } catch (err) {
      
     return  err.data.error 
    }
         if(response.status==200){
        
         document.getElementById("modal").click()
         }

 }


 
 




  render() {
    return (
          <>

        <main role="main" className="container">
          <div className="my-3 p-3 bg-white rounded shadow-sm">
              <h4 className="border-bottom border-gray pb-2 mb-0">Clonar Bot</h4>
              <br/>

                <div className="form-group text-grey">      
                <label for="exampleFormControlInput1">Key Origem</label>
                <input type="apikey" className="form-control" 
               onChange = {(event) => this.setState({keyOrigem:event.target.value})}
                 id="exampleFormControlInput1" />
                </div>
                <div className="form-group text-grey">      
                <label for="exampleFormControlInput1">Key Destino</label>
                <input type="apikey" className="form-control" 
               onChange = {(event) => this.setState({keyDestino:event.target.value})}
                 id="exampleFormControlInput1" />
                </div>



              <div className="container-button">
               <button className="btn btn-primary btn" onClick={(event) => this.handleGetOrigin(event)}>Clonar</button> 
          
              </div>

      
            </div>

            
           <button  type="hidden" id="modal" className="btn btn-primary" data-toggle="modal" data-backdrop="static"  data-target="#exampleModalCenter">

            </button>

          <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"      aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
              
                <div className="modal-body">
              

            <div className="my-3 p-3 bg-white">
            
              <div className="media text-muted pt-3">
                <p className="media-body pb-3 mb-0 lh-125 border-gray">
                </p>
              </div>
              <div className="text-center">
                <img src="https://raw.githubusercontent.com/Wilkor/Chat-bot-test/master/InternetSlowdown_Day.gif" className="img-fluid" alt="Responsive image" width="50%" height="50%"/>
              </div>
              <br/>
              <main role="main" className="inner cover">
                
              </main>

              <br/>

            </div>


                </div>
              
              </div>
            </div>
          </div>

        </main>
 
          </>
    );
  }
}

export default Home;
