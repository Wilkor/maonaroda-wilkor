import React, { Component } from 'react';
import getTickets from '../controllers/getTickets'
import CloseTickets from '../controllers/closeTickets'
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



 handleGetTickets() {

      if(!localStorage.getItem('@heavybots:token')){

 NotificationManager.info('No menu configurações, adicione uma ApiKey para realizar esta operação', 'Informação!');
       return false;

     }

  let result  =  getTickets()


  document.getElementById("modal").click()

   result.then( data =>{

     data.forEach(element =>{

        CloseTickets(element.id)

     })


   }).catch(error =>{

     console.log(error)
   })

   document.getElementById("modal").click()
    NotificationManager.success('Operação realizada com sucesso!', 'Concluido!');

}
  render() {
    return (
          <>

        <main role="main" class="container">
          <div class="my-3 p-3 bg-white rounded shadow-sm">
              <h4 class="border-bottom border-gray pb-2 mb-0">Fechar Tickets</h4>
              <br/>

              <div class="container-button">
               <button class="btn btn-primary btn" onClick={this.handleGetTickets}>Fechar Tickets</button>

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
                <img src="https://raw.githubusercontent.com/Wilkor/Chat-bot-test/master/InternetSlowdown_Day.gif" alt="" className="img-fluid"  width="50%" height="50%"/>
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
