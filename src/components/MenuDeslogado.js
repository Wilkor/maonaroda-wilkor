import React,{Component} from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component {

constructor(props){

  super(props)
}



   render (){
       
        return (
       <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="#"><img src="https://raw.githubusercontent.com/Wilkor/Chat-bot-test/master/14134081Untitled-3-512.png" alt="" width="50"/></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
       
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Cadastre-se</Link>
          </li>
         
        </ul>
      </div>
    </nav>
    </>
        )  
   }
       
}

export default Menu;