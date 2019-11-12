import React,{Component} from 'react';
import  MenuDeslogado  from '../components/MenuDeslogado';
import  MenuLogado  from '../components/Navbar';

class Navbar extends Component {

constructor(props){

  super(props)

  this.state = {

       logged:this.props.getLogin()
  }
}

 render(props){

    return (
 
    <>
            {this.props.getLogin() ? <MenuLogado/> :<MenuDeslogado/>}
       
    </>

          )
 }
}
export default Navbar;