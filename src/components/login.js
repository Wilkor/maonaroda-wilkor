import React, {Component} from 'react';
import login from '../controllers/loginController'
import { Link,Redirect } from 'react-router-dom';


class Login extends Component{

constructor(props){

  super(props);

  this.state={

      email:'',
      password:'',
      logged:null
  
  }
    

 }


 async handleClick(event){
   event.preventDefault();

   const logged =  await login(this.state.email,this.state.password)
     .then(response =>{
         this.props.setNewState(true)
         this.setState({logged:true})
       return response
     })

    if(logged===400){

      document.getElementById("modal").click();
    }
    
  
     
     

 }



   render(){

   return (

           
        <>
       {this.state.logged?<Redirect to={{ pathname: "/config" }} />:""}
     <div className="container">
    <br/>
     <div className="container pt-3">
    <div className="row justify-content-sm-center">
      <div className="col-sm-6 col-md-4">
        <div className="card border-info text-center">
          <div className="card-header">
            HeavyBots{this.state.loggedInUser}
          </div>
          <div className="card-body">
          
           
            <form className="form-signin">
              <input type="text" id="email" onChange = {(event) => this.setState({email:event.target.value})} className="form-control mb-2" placeholder="Endereço de email" required autofocus/>
              <input  type="password" onChange = {(event) => this.setState({password:event.target.value})}  className="form-control mb-2" placeholder="Senha" required/>

              <button className="btn btn-lg btn-primary btn-block mb-1" onClick={(event) => this.handleClick(event)}>Logar</button>
         
           <div id="links-login">
              <Link id="link-login" to="/forgot" className="float-right">Esqueceu sua senha?</Link> 
              <Link  id="link-login" to="/signup" className="float-right">Não tem uma conta?</Link>
        </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<button type="hidden" id="modal" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Login</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
     

  <div className="my-3 p-3 bg-white">
   
    <div className="media text-muted pt-3">
      <p className="media-body pb-3 mb-0 lh-125 border-gray">
      </p>
    </div>
    <div className="text-center">
      <img src="https://raw.githubusercontent.com/dioliveira84/front-big-bets/master/images/notsubmitted.png" className="img-fluid" alt="" width="20%" height="20%"/>
    </div>
    <br/>
    <main role="main" className="inner cover">
      <h4 className="cover-heading text-center text-grey">Dados Invalidos</h4>
    </main>

    <br/>

  </div>


      </div>
     
    </div>
  </div>
</div>

</>

   )


   }


}

export default Login;