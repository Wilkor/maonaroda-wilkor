
import api from './services-api';


const deleteResource  = async (id) =>{

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
        method: "set",
        uri: "/tickets/change-status",
        type: "application/vnd.iris.ticket+json",
        resource: {
           id: id,
          status: "ClosedClient"
          }
          
      },{ headers: { 'Content-Type': 'application/json'} } );
       
          return response

    } catch (err) {
      
     return  err.data.error 
    }

}
export default deleteResource;
