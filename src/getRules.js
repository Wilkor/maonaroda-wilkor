
import api from './services-api';


const getRules  = async () =>{

try {

     const response =  await api.post('/commands', {
      id:"3f72f72c-5cac-4b65-b76c-aa256f54aa8f",
      method:"get",
      to:"postmaster@desk.msging.net",
      uri:"/rules?$take=90000"
      },{ headers: { 'Content-Type': 'application/json'} } );
       
          return response.data.resource.items

    } catch (err) {
      
     return  err.data.error 
    }

}
export default getRules;
