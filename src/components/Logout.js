import React, {Component}from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component{

  constructor(props){

    super(props)

  }

   render(props){ 
     console.log(props)

       localStorage.removeItem("@bigbets:iduser");
       this.props.setNewState({logged:false})
       
        return <Redirect to={{ pathname: "/login" }} />

   }


}

export default Logout;