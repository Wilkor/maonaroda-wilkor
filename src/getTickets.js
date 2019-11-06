
import api from './services-api';


const getRules  = async () =>{

      function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}


try {

  const response =  await api.post('/commands', {

   id: guid(),
   to: "postmaster@desk.msging.net",
   method: "get",
   uri: "/monitoring/waiting-tickets?version=2"
   
  },{ headers: { 'Content-Type': 'application/json'} } );
       
          return response.data.resource.items

    } catch (err) {
      
     return  err.data.error 
    }

}
export default getRules;
