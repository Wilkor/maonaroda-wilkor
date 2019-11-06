

import React, {Component} from 'react';


class ListStatus extends Component{

  constructor(props){

  super(props)

  }

render(){
const {ideia} = this.props
console.log(ideia)
return (

     <tr>
        
      <td>{ideia.phone}</td>
      <td>{ideia.evento}</td>

    </tr>

)



}

}

export default ListStatus