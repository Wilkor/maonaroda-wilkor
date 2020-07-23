import React, { Component } from 'react';
import api from '../../src/services/services-api';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'

import '../style.css';

class Home extends Component {
constructor(props){

  super(props)

  this.state ={
    keyOrigem:null,
    keyDestino:null,
    statusWhatsApp:[],
    sendNotification:null
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






 handleGetMessageLog = async (event)=>{

   let dataFilter = new Date();
   let dayWeek = dataFilter.getDate()<10 ? '0'+ dataFilter.getDate(): dataFilter.getDate();
   let month =   (dataFilter.getMonth()+1) <10 ?'0'+dataFilter.getMonth():(dataFilter.getMonth()+1);
   let year = dataFilter.getFullYear();


  event.preventDefault();

  let token = localStorage.getItem('@heavybots:token');

   console.log(typeof token)

     if(!token || token === "null" ){


    NotificationManager.error('No menu configurações, adicione uma ApiKey para realizar esta operação!', 'Erro');


       return false;

     }


     const response =  await api.post('/commands', {
          id:this.guid(),
          method: "get",
          uri: "/messages?$take=100&$skip=0"
          },
         {
            headers: {'Content-Type': 'application/json'}}

        );

      const { data } = response
      let resultItems = data.resource.items;

    var result = {
         "resource":resultItems
                    .filter((props)=>{ return props["pp"]})
                     .map((e)=>{ return {"id":e.id, "data": e.metadata["#scheduler.when"].split(" ")[0]}})
                     .filter((e)=>{ return e.data === month+"/"+dayWeek+"/"+year})
                }



             if(result.resource.length===0){

                 NotificationManager.warning('Não houve resultados para listar!', 'Concluido!');
                 return false

             }else{

                this.handleGetStatusWhatsApp(result);
             }

}

handleGetStatusWhatsApp = async (result1) =>{


document.getElementById("modal").click()
        let resultArrayWhitStatusAndPhon = []
        let buscaSatatus = result1;


        

        for(var i = 0; i < buscaSatatus.resource.length;i++){

            const response =  await api.post('/commands', {
                        "id": this.guid(),
                        "method": "get",
                        "uri": "/notifications?id="+buscaSatatus.resource[i].id+"&$skip=0&$take=10"
                        },{
                            headers: {'Content-Type': 'application/json'}}
                        );
                    const { data } = response
                    console.log(data.resource.items)
                    let t  = data.resource.items.map((e)=>{return {"evento":e.event,"phone":e.from.split("/")[1].split("%40")[0]}})

                        resultArrayWhitStatusAndPhon.push(t[0]);


        }

        console.log(resultArrayWhitStatusAndPhon)

        let newArraySet =  [...new Map(resultArrayWhitStatusAndPhon.map(item => [item.phone, item])).values()]

        this.setState({statusWhatsApp:newArraySet})

        document.getElementById("modal").click()
        NotificationManager.success('Operação realizada com sucesso!', 'Concluido!');
}






  render() {
    return (
          <>

        <main role="main" className="container">
          <div className="my-3 p-3 bg-white rounded shadow-sm">
              <h4 className="border-bottom border-gray pb-2 mb-0">BroadCast</h4>
              <br/>
              <div className="container-button">
               <button className="btn btn-primary btn" onClick={(event) => this.handleGetMessageLog(event)}>Verificar Status</button>

              </div>
              <br/>

                 <table className="table table-hover table-dark">
            <thead>
              <tr>

                <th scope="col">Telefone</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>


            {this.state.statusWhatsApp.map((elemento)=>{

              return (
                  <tr>

                    <td>{elemento.phone}</td>
                    <td>{elemento.evento}</td>

                    </tr>
                   )
            })}

            </tbody>
            </table>
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
                <img src="https://raw.githubusercontent.com/Wilkor/Chat-bot-test/master/InternetSlowdown_Day.gif" alt="" className="img-fluid" width="50%" />
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

        <NotificationContainer/>

        </main>



          </>
    );
  }
}

export default Home;
