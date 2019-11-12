import React,{Component} from 'react';
import signup from '../services/signup'
import {Redirect } from 'react-router-dom';

class Signup extends Component {

constructor(props){

  super(props);

  this.state={

      email:'',
      senha:'',
      logged:false
  }

 }

 async handleClick(event){
  event.preventDefault();
const reset =  await signup(this.state.email,this.state.senha)
     .then(response =>{return response}).catch(res=>{console.log(reset)})

     if(reset){
      this.props.setNewState(true)
      this.setState({logged:true})

     }
}

 render(){

             return (

      <>
        {this.state.logged?<Redirect to={{ pathname: "/login" }} />:""}
              <div className="container">
                <br/>
                <div className="container pt-3">
                  <div className="row justify-content-sm-center">
                    <div className="col-sm-6 col-md-4">
                      <div className="card border-info text-center">
                        <div className="card-header">
                          HeavyBots
                        </div>
                        <div className="card-body">
                  
                          <form  className="form-signin">
                           
                            <input type="text" onChange = {(event) => this.setState({email:event.target.value})} name="email" className="form-control mb-2" placeholder="Email" required/>
                        
                            <input type="password" name="password" className="form-control mb-2" placeholder="Senha" onChange = {(event) => this.setState({senha:event.target.value})} required/>
                            <button className="btn btn-lg btn-primary btn-block mb-1" onClick={(event) => this.handleClick(event)}  type="submit">Cadastrar</button>
                            
                          </form>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

  
      </>
        )
 
}
}
export default Signup;