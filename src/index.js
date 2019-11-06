import React, { Component } from 'react';
import { render } from 'react-dom';
import Router from './Router'
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
class App extends Component {

  constructor(props){

    super(props);

   this.state ={

      userInfo: {},
      logged:false

    }


  }

changeState = (arg) =>{
  if (arg) {
  this.setState({
    userInfo: arg,
    logged: true
  })}

}


render(props) {
    return (
      <>
      
     <Router>
      </Router>

      
    
      </>
     
    );
  }
}

render(<App />, document.getElementById('root'));
