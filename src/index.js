import React, { Component } from 'react';
import { render } from 'react-dom';
import Router from '../src/routes/Router'
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import { Redirect } from "react-router-dom";
class App extends Component {

  constructor(props){

    super(props);

   this.state ={

      userInfo: {},
      logged:false,
      ideia:null

    }


  }

changeState = (arg) =>{
  if (arg) {
  this.setState({
    userInfo: arg,
    logged: true
  })}

}

setIdeia =(ideia) =>{
  this.setState({ideia})
}



render(props) {
    return (
      <>
   <Router setNewState={this.changeState} logged={this.state.logged} user={this.state} setIdeia={this.setIdeia}>
    </Router>
      </>

    );
  }
}

render(<App/>, document.getElementById('root'));
