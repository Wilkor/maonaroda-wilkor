
import api from './services-api';


const deleteRules  = async (id) =>{

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
      id:guid(),
      method:"delete",
      to:"postmaster@desk.msging.net",
      uri:"/rules/"+id
      },{ headers: { 'Content-Type': 'application/json'} } );
       
          return response

    } catch (err) {
      
     return  err.data.error 
    }

}
export default deleteRules;
